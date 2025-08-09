-- Enums
create type public.zodiac_sign as enum (
  'aries','taurus','gemini','cancer','leo','virgo','libra','scorpio','sagittarius','capricorn','aquarius','pisces'
);

create type public.horoscope_period as enum ('daily','weekly','monthly');

create type public.app_role as enum ('admin','editor','user');

-- Utility function for updated_at
create or replace function public.update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Admin emails table for roleless admin bootstrap
create table if not exists public.admin_emails (
  email text primary key,
  created_at timestamptz not null default now()
);

alter table public.admin_emails enable row level security;

-- Function to check if current user is admin by email
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.admin_emails a
    where a.email = coalesce(nullif(current_setting('request.jwt.claims', true)::jsonb ->> 'email',''), '')
  );
$$;

-- Roles table (optional future use)
create table if not exists public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  role public.app_role not null,
  created_at timestamptz not null default now(),
  unique (user_id, role)
);

alter table public.user_roles enable row level security;

-- Horoscopes content
create table if not exists public.horoscopes (
  id uuid primary key default gen_random_uuid(),
  sign public.zodiac_sign not null,
  period public.horoscope_period not null,
  date_start date not null,
  date_end date not null,
  general_text text not null,
  love_text text,
  career_text text,
  friendship_text text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_horoscopes_sign_period_dates on public.horoscopes(sign, period, date_start desc);

create trigger trg_horoscopes_updated_at
before update on public.horoscopes
for each row execute function public.update_updated_at_column();

alter table public.horoscopes enable row level security;

-- Compatibility content
create table if not exists public.compatibility (
  id uuid primary key default gen_random_uuid(),
  sign_a public.zodiac_sign not null,
  sign_b public.zodiac_sign not null,
  love_score int check (love_score between 0 and 100),
  career_score int check (career_score between 0 and 100),
  friendship_score int check (friendship_score between 0 and 100),
  love_text text,
  career_text text,
  friendship_text text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (sign_a, sign_b)
);

create trigger trg_compatibility_updated_at
before update on public.compatibility
for each row execute function public.update_updated_at_column();

alter table public.compatibility enable row level security;

-- Articles (for future blog/CMS)
create table if not exists public.articles (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  content text not null,
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger trg_articles_updated_at
before update on public.articles
for each row execute function public.update_updated_at_column();

alter table public.articles enable row level security;

-- Site settings (key-value)
create table if not exists public.site_settings (
  key text primary key,
  value jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.site_settings enable row level security;

-- Birth chart submissions (MVP storage of requests)
create table if not exists public.birth_chart_submissions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid,
  name text,
  birth_date date not null,
  birth_time time,
  location text,
  computed_sun_sign public.zodiac_sign,
  created_at timestamptz not null default now()
);

alter table public.birth_chart_submissions enable row level security;

-- Storage bucket for gallery
insert into storage.buckets (id, name, public)
values ('gallery', 'gallery', true)
on conflict (id) do nothing;

-- RLS Policies
-- admin_emails: Users can see if they are admin (only their email)
create policy if not exists "Users can view their own admin email"
  on public.admin_emails
  for select
  to authenticated
  using (email = coalesce(nullif(current_setting('request.jwt.claims', true)::jsonb ->> 'email',''), ''));

-- user_roles: user can read own roles
create policy if not exists "Users can view their roles"
  on public.user_roles
  for select
  to authenticated
  using (user_id = auth.uid());

-- Horoscopes: public read, admin manage
create policy if not exists "Everyone can read horoscopes"
  on public.horoscopes
  for select
  using (true);

create policy if not exists "Admins can insert horoscopes"
  on public.horoscopes
  for insert
  to authenticated
  with check (public.is_admin());

create policy if not exists "Admins can update horoscopes"
  on public.horoscopes
  for update
  to authenticated
  using (public.is_admin());

create policy if not exists "Admins can delete horoscopes"
  on public.horoscopes
  for delete
  to authenticated
  using (public.is_admin());

-- Compatibility: public read, admin manage
create policy if not exists "Everyone can read compatibility"
  on public.compatibility
  for select
  using (true);

create policy if not exists "Admins can insert compatibility"
  on public.compatibility
  for insert
  to authenticated
  with check (public.is_admin());

create policy if not exists "Admins can update compatibility"
  on public.compatibility
  for update
  to authenticated
  using (public.is_admin());

create policy if not exists "Admins can delete compatibility"
  on public.compatibility
  for delete
  to authenticated
  using (public.is_admin());

-- Articles: public read only when published, admin manage
create policy if not exists "Everyone can read published articles"
  on public.articles
  for select
  using (published = true);

create policy if not exists "Admins can insert articles"
  on public.articles
  for insert
  to authenticated
  with check (public.is_admin());

create policy if not exists "Admins can update articles"
  on public.articles
  for update
  to authenticated
  using (public.is_admin());

create policy if not exists "Admins can delete articles"
  on public.articles
  for delete
  to authenticated
  using (public.is_admin());

-- Site settings: read for everyone (non-sensitive), admin manage
create policy if not exists "Everyone can read site settings"
  on public.site_settings
  for select
  using (true);

create policy if not exists "Admins can upsert site settings"
  on public.site_settings
  for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- Birth chart submissions: anyone can submit, only admins can read/delete
create policy if not exists "Anyone can submit birth charts"
  on public.birth_chart_submissions
  for insert
  with check (true);

create policy if not exists "Admins can read birth chart submissions"
  on public.birth_chart_submissions
  for select
  to authenticated
  using (public.is_admin());

create policy if not exists "Admins can delete birth chart submissions"
  on public.birth_chart_submissions
  for delete
  to authenticated
  using (public.is_admin());

-- Storage policies for gallery
create policy if not exists "Gallery images are publicly accessible"
  on storage.objects
  for select
  using (bucket_id = 'gallery');

create policy if not exists "Admins can upload to gallery"
  on storage.objects
  for insert
  to authenticated
  with check (bucket_id = 'gallery' and public.is_admin());

create policy if not exists "Admins can update gallery"
  on storage.objects
  for update
  to authenticated
  using (bucket_id = 'gallery' and public.is_admin());

create policy if not exists "Admins can delete gallery"
  on storage.objects
  for delete
  to authenticated
  using (bucket_id = 'gallery' and public.is_admin());

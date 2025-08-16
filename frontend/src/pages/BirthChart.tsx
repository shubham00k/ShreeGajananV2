import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const FUNCTION_URL = "https://https://vgkoomwiuwdcytwsyvaa.supabase.co/functions/v1/birthchart-notify"; // ← put your function URL

export default function BirthChart() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [birthTime, setBirthTime] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => { document.title = "Birth Chart Submission"; }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!birthDate) {
      toast({ title: "Birth date required", description: "Please select a date.", variant: "destructive" });
      return;
    }
    if (!email) {
      toast({ title: "Email required", description: "Please provide your email to receive the report.", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    // 1) Insert into Supabase
    const { error } = await supabase.from("birth_chart_submissions").insert({
      name: name || null,
      email: email || null,
      birth_date: birthDate,                         // YYYY-MM-DD
      birth_time: birthTime ? birthTime + ":00" : null, // HH:MM:SS
      location: location || null,
    });

    if (error) {
      setSubmitting(false);
      toast({ title: "Submission failed", description: error.message, variant: "destructive" });
      return;
    }

    // 2) Fire the Edge Function (don’t block the user if email fails)
    try {
      await fetch(FUNCTION_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          record: {
            name,
            email,
            birth_date: birthDate,
            birth_time: birthTime ? birthTime + ":00" : null,
            location,
          },
        }),
      });
    } catch (err) {
      // log silently; we already saved the record
      console.error("Notify failed:", err);
    }

    setSubmitting(false);
    toast({ title: "Submitted", description: "Thank you! We will send you your kundali report soon." });
    setName(""); setEmail(""); setBirthDate(""); setBirthTime(""); setLocation("");
  };

  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Birth Chart</h1>
        <p className="text-muted-foreground">Provide your details to request a birth chart reading.</p>
      </header>

      <section className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6">
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Your Birth Details</h2>
          <p className="text-sm text-muted-foreground">We only need basics; time and location help with accuracy.</p>
        </div>
        <div className="p-6 pt-0">
          <form onSubmit={onSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="birthDate">Birth Date</Label>
              <Input id="birthDate" type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} required />
            </div>
            <div className="grid gap-2 sm:grid-cols-2 gap-x-4">
              <div className="grid gap-2">
                <Label htmlFor="birthTime">Birth Time (Optional)</Label>
                <Input id="birthTime" type="time" value={birthTime} onChange={(e) => setBirthTime(e.target.value)} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="location">Birth Location (Optional)</Label>
                <Input id="location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="City, Country" />
              </div>
            </div>
            <Button type="submit" disabled={submitting}>{submitting ? "Submitting..." : "Submit"}</Button>
          </form>
        </div>
      </section>
    </main>
  );
}

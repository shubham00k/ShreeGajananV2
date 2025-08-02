import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const uploadCeremonyImage = async (file: File) => {
  const fileExt = file.name.split('.').pop()
  const fileName = `ceremony-${Date.now()}.${fileExt}`
  
  const { data, error } = await supabase.storage
    .from('ceremony-images')
    .upload(fileName, file)

  if (error) throw error
  
  // Get public URL
  const { data: { publicUrl } } = supabase.storage
    .from('ceremony-images')
    .getPublicUrl(fileName)

  // Save to database
  const { error: dbError } = await supabase
    .from('ceremony_images')
    .insert([{ image_url: publicUrl, file_name: fileName }])

  if (dbError) throw dbError
  
  return publicUrl
}

export const getCeremonyImages = async () => {
  const { data, error } = await supabase
    .from('ceremony_images')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}
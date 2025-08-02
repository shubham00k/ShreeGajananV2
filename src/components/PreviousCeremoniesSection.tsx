import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, X, ImageIcon } from "lucide-react";
import { uploadCeremonyImage, getCeremonyImages } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";

interface CeremonyImage {
  id: string;
  image_url: string;
  file_name: string;
  created_at: string;
}

const PreviousCeremoniesSection = () => {
  const [images, setImages] = useState<CeremonyImage[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    try {
      const ceremonyImages = await getCeremonyImages();
      setImages(ceremonyImages || []);
    } catch (error) {
      console.error('Error loading images:', error);
      toast({
        title: "Error",
        description: "Failed to load ceremony images",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    const uploadPromises = Array.from(files).map(async (file) => {
      if (file.type.startsWith('image/')) {
        try {
          await uploadCeremonyImage(file);
        } catch (error) {
          console.error('Upload error:', error);
          toast({
            title: "Upload Failed",
            description: `Failed to upload ${file.name}`,
            variant: "destructive",
          });
        }
      }
    });

    try {
      await Promise.all(uploadPromises);
      await loadImages();
      toast({
        title: "Success",
        description: "Images uploaded successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Some images failed to upload",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <section className="py-20 bg-gradient-to-b from-space-900/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cinzel text-celestial-gold mb-6">
            Previous Ceremonies
          </h2>
          <p className="text-lg text-celestial-silver max-w-2xl mx-auto mb-8">
            Witness the sacred moments from our past ceremonies and celebrations. 
            Each image captures the divine blessings and spiritual energy of these auspicious occasions.
          </p>
          
          {/* Upload Button */}
          <div className="mb-12">
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
            <Button
              onClick={triggerFileUpload}
              disabled={isUploading}
              className="bg-celestial-gold hover:bg-celestial-gold/90 text-space-900 font-semibold px-8 py-3"
            >
              <Upload className="w-5 h-5 mr-2" />
              {isUploading ? "Uploading..." : "Upload New Images"}
            </Button>
          </div>
        </div>

        {/* Images Grid */}
        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin w-8 h-8 border-2 border-celestial-gold border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-celestial-silver">Loading ceremony images...</p>
          </div>
        ) : images.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image) => (
              <Card 
                key={image.id} 
                className="bg-space-800/50 border-celestial-gold/20 hover:border-celestial-gold/40 transition-all duration-300 group overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={image.image_url}
                      alt="Ceremony"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-space-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <ImageIcon className="w-16 h-16 text-celestial-silver/50 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-celestial-silver mb-2">No Ceremony Images Yet</h3>
            <p className="text-celestial-silver/70 mb-6">
              Upload your first ceremony images to create a beautiful gallery
            </p>
            <Button
              onClick={triggerFileUpload}
              className="bg-celestial-gold hover:bg-celestial-gold/90 text-space-900 font-semibold"
            >
              <Upload className="w-4 h-4 mr-2" />
              Upload Images
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PreviousCeremoniesSection;
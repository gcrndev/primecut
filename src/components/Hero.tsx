import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif mb-6">
          Prime <span className="text-primary">Cut</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
          A Excelência em Cortes Masculinos
        </p>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
          Tradição, estilo e profissionalismo em cada detalhe
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={() => window.open("https://primecut.pt", "_blank")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold"
          >
            Agendar Agora
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() =>
              window.open("https://www.instagram.com/primecut.pt/", "_blank")
            }
            className="border-2 border-primary text-foreground hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg"
          >
            <Instagram className="w-5 h-5 mr-2" />
            Instagram
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

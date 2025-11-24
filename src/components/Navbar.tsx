import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Prime Cut Logo"
              className="h-10 w-10 object-contain"
            />
            <h1 className="text-2xl font-bold font-serif text-foreground">
              Prime <span className="text-primary">Cut</span>
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Galeria
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Localização
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                window.open("https://www.instagram.com/primecut.pt/", "_blank")
              }
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </Button>
            <Button
              onClick={() => window.open("https://primecut.pt", "_blank")}
              className="bg-primary hover:bg-primary/90"
            >
              Agendar
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

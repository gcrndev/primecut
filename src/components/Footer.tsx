import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={logo}
                alt="Prime Cut Logo"
                className="h-10 w-10 object-contain"
              />
              <h3 className="text-2xl font-bold font-serif">
                Prime <span className="text-primary">Cut</span>
              </h3>
            </div>
            <p className="text-muted-foreground mb-4">
              PrimeCut o corte certo sempre em cada detalhe.
            </p>
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                window.open("https://www.instagram.com/primecut.pt/", "_blank")
              }
              className="hover:text-primary"
            >
              <Instagram className="w-5 h-5" />
            </Button>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a
                  onClick={() => scrollToSection("about")}
                  className="hover:text-primary transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection("services")}
                  className="hover:text-primary transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection("gallery")}
                  className="hover:text-primary transition-colors"
                >
                  Galeria
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection("location")}
                  className="hover:text-primary transition-colors"
                >
                  Localização
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Horário</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Seg - Sex: 09:00 - 20:00</li>
              <li>Sábado: 09:00 - 18:00</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>+351 913 012 661</li>
              <li>contato@primecut.pt</li>
              <li>Rua Dr. Manuel Rodrigues, 02</li>
            </ul>
            <Button
              onClick={() => window.open("https://primecut.pt", "_blank")}
              className="mt-4 bg-primary hover:bg-primary/90"
            >
              Marcar Agora
            </Button>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Prime Cut. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

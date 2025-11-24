import { Button } from "@/components/ui/button";
import ctaBg from "@/assets/cta-bg.jpg";

const CTA = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale"
        style={{ backgroundImage: `url(${ctaBg})` }}
      >
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold font-serif mb-6">
          Pronto para sua{" "}
          <span className="text-primary">experiência na Prime Cut ?</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Reserve seu horário agora e descubra por que somos a escolha dos
          homens que valorizam qualidade e estilo
        </p>
        <Button
          size="lg"
          onClick={() => window.open("https://primecut.pt", "_blank")}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-8 text-xl font-semibold shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-all"
        >
          Agende Seu Horário
        </Button>
      </div>
    </section>
  );
};

export default CTA;

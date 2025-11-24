import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "João Costa",
    text: "Sempre tive dificuldade em achar uma barbearia que eu gostasse aqui em Portugal, mas na Prime cut me sinto em casa, além do trabalho impecável dos profissionais. ",
    rating: 5,
  },
  {
    name: "Pedro Nascimento",
    text: "Visitei pela primeira vez e sai me sentindo outro, autoestima lá em cima, só corto lá agora! Nota 10 para o pessoal da Prime Cut.",
    rating: 5,
  },
  {
    name: "Gonçalo Pereira",
    text: "Melhor barbearia de Coimbra, recomedo.",
    rating: 5,
  },
  {
    name: "Ricardo Novais",
    text: "Fui cliente de várias barbearias, mas a Prime Cut é superior. Ambiente, serviço e resultado perfeito.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            O que dizem nossos <span className="text-primary">Clientes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Testemunhos reais de quem confia na Prime Cut para seu estilo
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover-lift">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-foreground">
                  — {testimonial.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

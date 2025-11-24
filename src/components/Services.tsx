import { Scissors, Sparkles, ShoppingBag, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Scissors,
    title: "Corte Masculino",
    description: "Corte personalizado com técnicas modernas e clássicas",
    price: "€25",
  },
  {
    icon: ShoppingBag,
    title: "Barba Completa",
    description: "Aparar, modelar e finalização premium",
    price: "€20",
  },
  {
    icon: ShoppingBag,
    title: "Navalhado",
    description: "Barbear tradicional com navalha e toalha quente",
    price: "€18",
  },
  {
    icon: Palette,
    title: "Pigmentação",
    description: "Pigmentação profissional de barba e cabelo",
    price: "€30",
  },
  {
    icon: Sparkles,
    title: "Combo Corte + Barba",
    description: "Pacote completo com desconto especial",
    price: "€40",
  },
  {
    icon: Scissors,
    title: "Design de Barba",
    description: "Modelagem criativa e personalizada",
    price: "€22",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Serviços premium executados com dedicação pelos nossos profissionais
            experientes
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border hover-lift group cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <span className="text-2xl font-bold text-primary">
                    {service.price}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

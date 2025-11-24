import { MapPin, Phone, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Location = () => {
  return (
    <section id="location" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            Visite-nos em <span className="text-primary">Coimbra</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos localizados no coração da cidade, prontos para atendê-lo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <Card className="bg-background border-border">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Endereço</h3>
                  <p className="text-muted-foreground">
                    Rua Dr. Manuel Rodrigues, 02
                    <br />
                    Coimbra
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background border-border">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Horário de Funcionamento
                  </h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Segunda a Sexta: 09:00 - 20:00</p>
                    <p>Sábado: 09:00 - 18:00</p>
                    <p>Domingo: Fechado</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background border-border">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Contacto</h3>
                  <p className="text-muted-foreground">
                    Telefone: +351 913 012 661
                    <br />
                    Email: contato@primecut.pt
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="h-[500px] rounded-lg overflow-hidden premium-glow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.7839422732827!2d-8.432438618405001!3d40.21386877917703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd22f904e490a535%3A0x4ca29540edfab332!2sR.%20Dr.%20Manuel%20Rodrigues%202%2C%203000-258%20Coimbra!5e0!3m2!1spt-PT!2spt!4v1763925289627!5m2!1spt-PT!2spt"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Prime Cut"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

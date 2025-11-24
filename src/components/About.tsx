import aboutImg from "@/assets/about-img.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
              Sobre a <span className="text-primary">Prime Cut</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Na PrimeCut, buscamos excelência em cada corte e fazemos questão
              de surpreender todos que passam por aqui. Nossa equipe reúne
              profissionais experientes, que entendem que estilo não é só
              visual, é postura, é personalidade.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Nosso ambiente exclusivo entrega uma experiência premium de
              verdade, com cada detalhe pensado para oferecer conforto,
              confiança e resultados impecáveis. Da recepção à cadeira, você é
              tratado com respeito, atenção e a segurança de estar nas mãos
              certas.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-background rounded-lg hover-lift">
                <p className="text-3xl font-bold text-primary mb-2">15+</p>
                <p className="text-sm text-muted-foreground">
                  Anos de Experiência
                </p>
              </div>
              <div className="text-center p-4 bg-background rounded-lg hover-lift">
                <p className="text-3xl font-bold text-primary mb-2">10k+</p>
                <p className="text-sm text-muted-foreground">
                  Clientes Satisfeitos
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative premium-glow rounded-lg overflow-hidden">
              <img
                src={aboutImg}
                alt="Interior da Prime Cut Barbearia"
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

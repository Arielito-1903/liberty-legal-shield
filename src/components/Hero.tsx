
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-legal-navy to-legal-dark py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-fixed opacity-10 bg-cover bg-center"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-white mb-6 leading-tight">
            Defendemos tu libertad con experiencia y compromiso
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-inter mb-8 leading-relaxed">
            Abogados especialistas en derecho penal comprometidos con tu defensa y la protección de tus derechos en todo momento.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-legal-gold hover:bg-legal-accent text-legal-dark font-medium px-6 py-3 text-lg rounded-md flex items-center gap-2" size="lg">
              Consulta Gratuita
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 font-medium px-6 py-3 text-lg rounded-md" size="lg">
              Conoce Nuestros Servicios
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;


import { ArrowRight, Phone } from "lucide-react";
import { Button } from "./ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-legal-navy">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-gradient-to-r from-legal-navy to-legal-dark p-8 md:p-12 rounded-lg shadow-xl border-l-4 border-legal-gold">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl md:text-3xl font-bold font-playfair text-white mb-4">
                ¿Enfrentando cargos penales? Actúa ahora
              </h2>
              <p className="text-gray-300 font-inter">
                La primera consulta es completamente gratuita y confidencial. No arriesgues tu futuro.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-legal-gold hover:bg-legal-accent text-legal-dark font-medium px-6 py-3 rounded-md flex items-center gap-2">
                Consulta Gratuita 
                <ArrowRight className="h-5 w-5" />
              </Button>
              
              <a href="tel:+1234567890" className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-md transition duration-300">
                <Phone className="h-5 w-5" />
                <span>Llámanos Ahora</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

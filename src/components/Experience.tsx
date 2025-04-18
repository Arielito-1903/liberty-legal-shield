
import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button";

const caseStats = [
  { count: "95%", description: "Resoluciones favorables" },
  { count: "+500", description: "Clientes defendidos" },
  { count: "15+", description: "Años de experiencia" },
  { count: "24/7", description: "Disponibilidad" }
];

const successCases = [
  "Absolución completa en casos de homicidio",
  "Reducción de penas en delitos contra la salud pública",
  "Revocación de órdenes de prisión preventiva",
  "Absolución en casos de fraude financiero"
];

const Experience = () => {
  return (
    <section id="experiencia" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-legal-navy mb-4">
              Experiencia probada en la defensa de tus derechos
            </h2>
            <div className="w-24 h-1 bg-legal-gold mb-6"></div>
            <p className="text-gray-600 font-inter mb-6">
              Nuestro despacho cuenta con un historial comprobado de casos exitosos en diversos ámbitos del derecho penal. Nos distingue nuestro enfoque meticuloso, conocimiento profundo del sistema legal y pasión por defender los derechos de nuestros clientes.
            </p>
            
            <div className="mb-8 space-y-4">
              {successCases.map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-legal-gold h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="font-inter text-gray-600">{item}</p>
                </div>
              ))}
            </div>
            
            <Button className="bg-legal-navy hover:bg-legal-dark text-white font-medium px-6 py-3 rounded-md">
              Ver Todos Nuestros Casos
            </Button>
          </div>
          
          {/* Columna derecha: Estadísticas */}
          <div className="grid grid-cols-2 gap-6">
            {caseStats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-legal-gold"
              >
                <p className="text-4xl font-bold text-legal-navy font-playfair mb-2">{stat.count}</p>
                <p className="text-gray-500 font-inter">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

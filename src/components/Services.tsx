
import { Shield, FileText, Users, Briefcase, Scale, Landmark } from "lucide-react";

const serviceItems = [
  {
    icon: Shield,
    title: "Defensa Criminal",
    description: "Protección integral en todo tipo de delitos penales con estrategias personalizadas para cada caso."
  },
  {
    icon: FileText,
    title: "Casos de Narcotráfico",
    description: "Representación especializada en delitos de drogas y sustancias controladas."
  },
  {
    icon: Users,
    title: "Violencia Doméstica",
    description: "Defensa sensible y efectiva en casos de violencia intrafamiliar y órdenes de protección."
  },
  {
    icon: Briefcase,
    title: "Delitos Económicos",
    description: "Especialización en fraude, malversación y otros delitos de cuello blanco."
  },
  {
    icon: Scale,
    title: "Recursos de Apelación",
    description: "Experiencia en impugnación de sentencias y recursos ante tribunales superiores."
  },
  {
    icon: Landmark,
    title: "Representación en Juicio",
    description: "Defensa agresiva y estratégica en la sala del tribunal, con amplia experiencia litigante."
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-legal-navy mb-4">Nuestros Servicios Legales</h2>
          <div className="w-24 h-1 bg-legal-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto font-inter">
            Ofrecemos una defensa penal integral, con atención personalizada y estrategias adaptadas a las necesidades específicas de cada cliente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-md transition-all hover:shadow-xl hover:translate-y-[-5px] border-t-4 border-legal-gold"
            >
              <div className="bg-legal-navy inline-block p-3 rounded-lg mb-6">
                <service.icon className="h-7 w-7 text-legal-gold" />
              </div>
              <h3 className="text-xl font-bold font-playfair text-legal-navy mb-3">{service.title}</h3>
              <p className="text-gray-600 font-inter">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

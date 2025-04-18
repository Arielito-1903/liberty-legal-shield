
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendoza",
    case: "Defensa en caso de fraude",
    content: "Cuando pensaba que todo estaba perdido, este despacho consiguió revertir mi situación legal. Su dedicación y conocimiento del derecho penal fueron determinantes en mi absolución.",
    rating: 5
  },
  {
    name: "Laura Sánchez",
    case: "Apelación exitosa",
    content: "Gracias a su experiencia y meticulosidad al revisar mi caso, consiguieron que mi sentencia fuera reducida significativamente. Siempre estuvieron disponibles para resolver mis dudas.",
    rating: 5
  },
  {
    name: "Roberto Jiménez",
    case: "Caso de narcotráfico",
    content: "Su estrategia de defensa fue impecable. Supieron manejar un caso muy complejo con profesionalismo y lograron demostrar mi inocencia cuando parecía imposible.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="py-16 md:py-24 bg-legal-navy text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Lo que dicen nuestros clientes</h2>
          <div className="w-24 h-1 bg-legal-gold mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto font-inter">
            Nuestro compromiso con la excelencia se refleja en la satisfacción de quienes han confiado en nuestros servicios legales.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-legal-dark p-8 rounded-lg relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-legal-gold opacity-50" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-legal-gold fill-legal-gold" />
                ))}
              </div>
              
              <p className="text-gray-300 font-inter mb-6 italic">"{testimonial.content}"</p>
              
              <div>
                <p className="font-bold font-playfair">{testimonial.name}</p>
                <p className="text-sm text-legal-gold">{testimonial.case}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

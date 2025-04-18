
import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    alert("Formulario enviado correctamente. Nos pondremos en contacto contigo pronto.");
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-legal-navy mb-4">Contáctanos</h2>
          <div className="w-24 h-1 bg-legal-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto font-inter">
            Estamos disponibles para ayudarte en tu caso. La primera consulta es gratuita y confidencial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Columna izquierda - Información de contacto */}
          <div className="bg-legal-navy text-white p-8 md:p-12 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold font-playfair mb-6">Información de Contacto</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-legal-gold mr-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-1">Teléfono</p>
                  <p className="text-gray-300">+34 123 456 789</p>
                  <p className="text-gray-300">+34 987 654 321</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-legal-gold mr-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-1">Correo electrónico</p>
                  <p className="text-gray-300">info@libertylegal.com</p>
                  <p className="text-gray-300">consultas@libertylegal.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-legal-gold mr-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-1">Dirección</p>
                  <p className="text-gray-300">Calle Gran Vía 123</p>
                  <p className="text-gray-300">28001, Madrid, España</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-legal-gold mr-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-1">Horario de atención</p>
                  <p className="text-gray-300">Lunes a Viernes: 9:00 - 19:00</p>
                  <p className="text-gray-300">Urgencias 24/7</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Columna derecha - Formulario */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Tu teléfono"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Asunto de tu consulta"
                    required
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe brevemente tu caso o consulta"
                  rows={5}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              
              <Button type="submit" className="w-full bg-legal-gold hover:bg-legal-accent text-legal-dark font-medium py-3 px-6 rounded-md text-lg">
                Enviar Consulta
              </Button>
              
              <p className="text-sm text-gray-600 text-center">
                Al enviar este formulario, aceptas nuestra política de privacidad y protección de datos.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

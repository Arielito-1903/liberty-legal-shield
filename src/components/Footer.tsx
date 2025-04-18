
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-legal-dark text-white">
      {/* Sección principal del footer */}
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div>
            <a href="#" className="inline-block mb-4">
              <span className="text-white font-playfair text-2xl font-bold">Liberty<span className="text-legal-gold">Legal</span></span>
            </a>
            <p className="text-gray-400 mb-4 font-inter">
              Abogados especialistas en derecho penal con más de 15 años de experiencia defendiendo los derechos de nuestros clientes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-legal-gold transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-legal-gold transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-legal-gold transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-legal-gold transition">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Links rápidos */}
          <div>
            <h3 className="text-lg font-bold font-playfair mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-legal-gold transition">Inicio</a></li>
              <li><a href="#servicios" className="text-gray-400 hover:text-legal-gold transition">Servicios</a></li>
              <li><a href="#experiencia" className="text-gray-400 hover:text-legal-gold transition">Experiencia</a></li>
              <li><a href="#testimonios" className="text-gray-400 hover:text-legal-gold transition">Testimonios</a></li>
              <li><a href="#contacto" className="text-gray-400 hover:text-legal-gold transition">Contacto</a></li>
            </ul>
          </div>
          
          {/* Servicios legales */}
          <div>
            <h3 className="text-lg font-bold font-playfair mb-4">Servicios Legales</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-legal-gold transition">Defensa Criminal</a></li>
              <li><a href="#" className="text-gray-400 hover:text-legal-gold transition">Casos de Narcotráfico</a></li>
              <li><a href="#" className="text-gray-400 hover:text-legal-gold transition">Violencia Doméstica</a></li>
              <li><a href="#" className="text-gray-400 hover:text-legal-gold transition">Delitos Económicos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-legal-gold transition">Recursos de Apelación</a></li>
            </ul>
          </div>
          
          {/* Contacto */}
          <div>
            <h3 className="text-lg font-bold font-playfair mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <span className="block">Calle Gran Vía 123</span>
                <span className="block">28001, Madrid, España</span>
              </li>
              <li className="text-gray-400">
                <span className="block">Teléfono: +34 123 456 789</span>
                <span className="block">Email: info@libertylegal.com</span>
              </li>
              <li className="text-gray-400">
                <span className="block">Lunes a Viernes: 9:00 - 19:00</span>
                <span className="block">Urgencias 24/7</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Barra de copyright */}
      <div className="bg-black py-4">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} LibertyLegal. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-legal-gold text-sm transition">Términos y Condiciones</a>
            <a href="#" className="text-gray-500 hover:text-legal-gold text-sm transition">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

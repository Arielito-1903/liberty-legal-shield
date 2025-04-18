
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-legal-navy shadow-md sticky top-0 z-50 px-4 md:px-8 lg:px-0">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="flex items-center">
            <span className="text-white font-playfair text-2xl font-bold">Liberty<span className="text-legal-gold">Legal</span></span>
          </a>
          
          {/* Teléfono móvil */}
          <a href="tel:+1234567890" className="md:hidden flex items-center text-white">
            <Phone className="h-5 w-5 text-legal-gold mr-2" />
            <span className="font-inter">123-456-7890</span>
          </a>
          
          {/* Menú de navegación desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#servicios" className="text-white hover:text-legal-gold font-inter text-sm font-medium transition duration-300">Servicios</a>
            <a href="#experiencia" className="text-white hover:text-legal-gold font-inter text-sm font-medium transition duration-300">Experiencia</a>
            <a href="#testimonios" className="text-white hover:text-legal-gold font-inter text-sm font-medium transition duration-300">Testimonios</a>
            <a href="#contacto" className="text-white hover:text-legal-gold font-inter text-sm font-medium transition duration-300">Contacto</a>
          </div>
          
          {/* Teléfono desktop */}
          <a href="tel:+1234567890" className="hidden md:flex items-center text-white">
            <Phone className="h-5 w-5 text-legal-gold mr-2" />
            <span className="font-inter">123-456-7890</span>
          </a>
          
          {/* Botón de menú móvil */}
          <button 
            className="md:hidden text-white focus:outline-none ml-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-legal-dark">
          <div className="container mx-auto py-4 space-y-4 flex flex-col">
            <a href="#servicios" className="text-white hover:text-legal-gold font-inter text-base font-medium px-4 py-2">Servicios</a>
            <a href="#experiencia" className="text-white hover:text-legal-gold font-inter text-base font-medium px-4 py-2">Experiencia</a>
            <a href="#testimonios" className="text-white hover:text-legal-gold font-inter text-base font-medium px-4 py-2">Testimonios</a>
            <a href="#contacto" className="text-white hover:text-legal-gold font-inter text-base font-medium px-4 py-2">Contacto</a>
            <Button className="mx-4 bg-legal-gold text-legal-dark hover:bg-legal-accent">Consulta Gratuita</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

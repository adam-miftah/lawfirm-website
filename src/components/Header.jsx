import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; 
import { Link, NavLink } from 'react-router-dom'; 

const Header = () => { 
const [isOpen, setIsOpen] = useState(false);
const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
 const handleScroll = () => {
 setIsScrolled(window.scrollY > 10);
 };
 window.addEventListener('scroll', handleScroll);
 return () => window.removeEventListener('scroll', handleScroll);
}, []);

const navLinks = [
 { name: 'Home', href: '/' },
 { name: 'Tentang Kami', href: '/tentang-kami' },
 { name: 'Jasa Hukum', href: '/jasa-hukum' },
 { name: 'Artikel', href: '/artikel' },
 { name: 'Kontak', href: '/kontak' },
];

const closeMobileMenu = () => setIsOpen(false);

return (
 <header className={`sticky top-0 z-50 shadow-sm border-b border-zinc-700/50 transition-colors duration-300 ease-in-out ${isScrolled ? 'bg-neutral-900/80 backdrop-blur-lg' : 'bg-neutral-900'}`}>
 <div className="container mx-auto px-6 py-3 flex justify-between items-center">
  
  <Link to="/" className="flex items-center gap-3">
  <img src="/images/logo.webp" alt="Logo Law Firm AKB & CO" className="h-12 w-12 flex-shrink-0" />
  <div className="flex flex-col">
   <span className="text-sm font-bold text-white leading-tight">LAW FIRM</span>
   <span className="text-sm font-bold text-amber-300 leading-tight">ABDUL KODIR BATUBARA & CO</span>
   <span className="text-xs text-gray-400 leading-tight tracking-wider">ADVOCATE & LEGAL CONSULTANT</span>
  </div>
  </Link>
  
  <nav className="hidden md:flex items-center space-x-8">
  {navLinks.map(link => (
   <NavLink 
    key={link.name} 
    to={link.href}
    className={({ isActive }) => `relative group font-medium transition-colors duration-300 ${isActive ? 'text-amber-300' : 'text-white group-hover:text-amber-300'}`}>
    {({ isActive }) => (
     <>
      {link.name}
      <span
       className={`absolute left-0 -bottom-1 h-0.5 bg-amber-300 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
      ></span>
     </>
    )}
   </NavLink>
  ))}
  </nav>
  
  <div className="md:hidden">
  <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" className="text-white z-50 relative">
   {isOpen ? <X size={28} /> : <Menu size={28} />}
  </button>
  </div>
 </div>
 
 <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-neutral-900 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
  <nav className="flex flex-col items-center justify-center h-full space-y-8">
   {navLinks.map(link => (
    <NavLink 
    key={link.name} 
    to={link.href} 
    onClick={closeMobileMenu}
    className={({ isActive }) => 
      `text-2xl transition-colors duration-300 ${isActive ? 'text-amber-300 font-bold' : 'text-white'}`
    }
    >
    {link.name}
    </NavLink>
   ))}
  </nav>
 </div>
 </header>
);
};

export default Header;
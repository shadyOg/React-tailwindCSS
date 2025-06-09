import { useEffect, useState } from "react";
import { href } from "react-router-dom";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { Menu } from "lucide-react";

const navItems = [
  {name: "Home", href: "#hero"},
  {name: "About", href: "#about"},
  {name: "Skills", href: "#skills"},
  {name: "projects", href: "#projects"},
  {name: "Contact", href: "#contact"},
]

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  })

  return <nav className={cn(
    "fixed w-full  z-40 transition-all duration-300",
    isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5")}>

    <div className="container flex items-center justify-between">
      <a
        className="text-xl font-bold text-primary flex items-center"
        href="#hero">
        <span className="relative z-index-10">
          <span className= " text-glow text-foreground"> ShadyTech </span>
          Portfolio
        </span>
      </a>

      {/* Desktop Navbar */}
      <div className="hidden md:flex space-x-8 ">
        {navItems.map((item, key) => (
          <a
            key={key}
            href={item.href}
            className="text-foreground/80 hover:text-primary transition-colors duration-300"
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Mobile Navbar */}
      <button onClick = {() => {setIsMenuOpen(!isMenuOpen)}} 
        className = "md:hidden p-2 text-foreground z-50"
        arial-label = {isMenuOpen ? "Close Menu" : "Open Menu"}>
        {isMenuOpen ? <X size={24} /> : < Menu size={24} />}{" "}
      </button>



      <div className= {cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center md:hidden",
                          "transition-all duration-300",
                          isMenuOpen ? "opacity-100 pointer-events-auto" 
                          : "opacity-0 pointer-events-none"
        )}>
        <div className="flex flex-col space-y-8 text-xl">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}>
              {item.name}
            </a>
          ))}
        </div>
      </div>

    </div>

  </nav>
};
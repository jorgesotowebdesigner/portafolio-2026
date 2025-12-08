import { useState } from "react";
import DarkToggle from "./DarkToggle.jsx";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Botón hamburguesa */}
      <button
        className="md:hidden flex flex-col gap-1.5"
        onClick={() => setOpen(!open)}
      >
        <span className={`w-6 h-0.5 bg-black transition-all ${open ? "rotate-45 translate-y-2" : ""}`}></span>
        <span className={`w-6 h-0.5 bg-black transition-all ${open ? "opacity-0" : ""}`}></span>
        <span className={`w-6 h-0.5 bg-black transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
      </button>

      {/* Menú móvil */}
      {open && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white dark:bg-dark flex flex-col items-center justify-center gap-8 text-2xl z-40 transition-all">
          <a href="#about" onClick={() => setOpen(false)}>Sobre mí</a>
          <a href="#projects" onClick={() => setOpen(false)}>Proyectos</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contacto</a>

          <DarkToggle />
        </div>
      )}
    </>
  );
}

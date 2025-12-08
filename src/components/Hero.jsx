import { useEffect, useState } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText =
    "A human-centered designer turning ideas into intuitive digital experiences.";

  const [index, setIndex] = useState(0);
  const [isDark, setIsDark] = useState(false);

  // Typing animation
  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, 40);
      return () => clearTimeout(timer);
    }
  }, [index]);

  // Detect dark mode
  useEffect(() => {
    const saved = localStorage.getItem("dark-mode") === "true";
    setIsDark(saved);
    document.body.classList.toggle("dark", saved);

    const observer = new MutationObserver(() => {
      const dark = document.body.classList.contains("dark");
      setIsDark(dark);
    });

    observer.observe(document.body, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="
        min-h-screen 
        flex 
        items-center 
        justify-center 
        px-6 
        pt-24
        relative
        overflow-visible
      "
    >

      {/* 🔥 GLOW DETRÁS DEL PERSONAJE */}
      <div
        className="
          absolute
          top-1/2
          right-[18%]
          -translate-y-1/2
          w-[520px]
          h-[520px]
          bg-red/40 dark:bg-red/60
          blur-[160px]
          rounded-full
          opacity-70
          -z-10
          pointer-events-none
        "
      ></div>

      <div
        className="
          max-w-5xl 
          w-full 
          mx-auto 
          flex 
          flex-col-reverse 
          md:flex-row 
          items-center 
          justify-between
          gap-12
        "
      >

        {/* TEXTOS */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg">

          {/* Badge */}
          <div
            className="
              backdrop-blur-xl 
              bg-white/50 dark:bg-white/10 
              border border-white/30 dark:border-white/20 
              shadow-lg 
              rounded-xl 
              px-5 py-2 
              mb-4
            "
          >
            <p className="text-dark dark:text-lightgray font-medium text-sm">
              ⭐ 4+ años de experiencia
            </p>
          </div>

          <h1 className="text-5xl md:text-6xl font-title text-dark dark:text-lightgray leading-tight">
            Hola, soy <span className="text-red">Jorge</span>
          </h1>

          <p className="text-lg md:text-xl text-dark dark:text-lightgray mt-4 min-h-[80px]">
            {text}
            <span className="typing-cursor">|</span>
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-red text-white font-semibold hover:bg-red/80 transition"
            >
              Ver proyectos
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-red text-red font-semibold hover:bg-red hover:text-white transition"
            >
              Contactar
            </a>
          </div>
        </div>

        {/* ILUSTRACIÓN */}
        <div className="relative">
          <img
            src={isDark ? "/images/hero-dark.png" : "/images/hero-light.png"}
            alt="Ilustración Jorge Soto"
            className="
              w-[380px] md:w-[450px] lg:w-[480px]
              object-contain
              drop-shadow-xl
              transition-all duration-500
              relative z-10
            "
          />
        </div>

      </div>
    </section>
  );
}

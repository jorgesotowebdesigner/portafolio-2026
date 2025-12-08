import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("dark-mode");
    const prefersDark = window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const isDark = saved === "true" || (!saved && prefersDark);

    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const newState = !dark;
    setDark(newState);

    document.documentElement.classList.toggle("dark", newState);
    localStorage.setItem("dark-mode", String(newState));
  };

  return (
    <button
      onClick={toggle}
      className="relative w-12 h-6 bg-lightgray dark:bg-dark rounded-full transition-all"
    >
      <span
        className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-md transition-all ${
          dark ? "left-6" : "left-0.5"
        }`}
      ></span>
    </button>
  );
}

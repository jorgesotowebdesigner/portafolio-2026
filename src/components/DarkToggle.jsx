import { useEffect, useState } from "react";

export default function DarkToggle() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("dark-mode") === "true";
    setEnabled(stored);
    if (stored) document.body.classList.add("dark");
  }, []);

  const toggleMode = () => {
    const newVal = !enabled;
    setEnabled(newVal);
    localStorage.setItem("dark-mode", newVal);

    if (newVal) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return (
    <button
      onClick={toggleMode}
      className="w-12 h-6 bg-gray-300 dark:bg-gray-700 rounded-full relative transition-all"
    >
      <span
        className={`block w-5 h-5 bg-white rounded-full transition-all absolute top-0.5 ${
          enabled ? "translate-x-6" : "translate-x-1"
        }`}
      ></span>
    </button>
  );
}

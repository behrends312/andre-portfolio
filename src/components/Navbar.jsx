import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "./ThemeContext";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  function goToHash(hash) {
    if (location.pathname !== "/") {
      navigate("/" + hash);
      // deixa o react router renderizar e depois rola
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
      return;
    }
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  }

  function handleGoTop() {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <header className="fixed top-0 w-full z-50 border-b border-black/10 dark:border-white/10 backdrop-blur bg-[#F3F1E7] dark:bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <button
          onClick={handleGoTop}
          className="font-mono text-base sm:text-lg dark:text-white text-black"
        >
          Carlos André Behrends
        </button>

        <div className="flex items-center gap-3">
          <nav className="hidden md:flex items-center gap-2 pr-3">
            <button
              onClick={() => goToHash("#services")}
              className="px-3 opacity-80 hover:opacity-100 text-lg"
            >
              Serviços
            </button>

            <button
              onClick={() => goToHash("#projects")}
              className="px-3 opacity-80 hover:opacity-100 text-lg"
            >
              Projetos
            </button>
          </nav>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="relative w-12 h-6 flex items-center rounded-full bg-gray-300 dark:bg-gray-700 transition-colors"
          >
            <span
              className={`absolute right-1 text-xs transition-opacity ${
                theme === "dark" ? "opacity-0" : "opacity-100"
              }`}
            >
              ☀️
            </span>
            <span
              className={`absolute left-1 text-xs transition-opacity ${
                theme === "dark" ? "opacity-100" : "opacity-0"
              }`}
            >
              🌙
            </span>
            <span
              className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                theme === "dark" ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </div>
    </header>
  );
}

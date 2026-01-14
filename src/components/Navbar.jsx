import { useNavigate, useLocation } from "react-router-dom";
import { useLang } from "./LanguageContext";
import { useTheme } from "./ThemeContext";
import "flag-icons/css/flag-icons.min.css";

export default function Navbar() {
  const { lang, setLang } = useLang();
  const { theme, setTheme } = useTheme();

  const navigate = useNavigate();
  const location = useLocation();

  function handleGoTop() {
    if (location.pathname === "/") {
      // já está na home → só sobe
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // vai pra home e sobe depois
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
    }
  }

  return (
    <header className="fixed top-0 w-full z-50 border-b border-black/10 dark:border-border backdrop-blur bg-[#F3F1E7] dark:bg-black/30">

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LEFT */}
        <button
          onClick={handleGoTop}
          className="font-mono text-lg dark:text-white text-black"
        >
          Carlos André Behrends
        </button>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          {/* FLAGS */}
          {/* <div className="flex items-center gap-3">
                <div className="flex items-center border border-border rounded-md overflow-hidden">
                    <button
                    onClick={() => setLang("en")}
                    className={`
                        px-3 py-2 text-sm
                        transition-colors
                        focus:outline-none focus-visible:outline-none focus:ring-0
                        ${
                        lang === "en"
                            ? "bg-white text-black"
                            : "bg-transparent hover:bg-black/5 dark:hover:bg-white/10"
                        }
                    `}
                    >
                    <span class="fi fi-us"></span>
                    </button>
                    <button
                    onClick={() => setLang("pt")}
                    className={`
                        px-3 py-2 text-sm
                        transition-colors
                        focus:outline-none focus-visible:outline-none focus:ring-0
                        ${
                        lang === "pt"
                            ? "bg-white text-black"
                            : "bg-transparent hover:bg-black/5 dark:hover:bg-white/10"
                        }
                    `}
                    >
                    <span class="fi fi-br"></span>
                    </button>
                </div>
            </div> */}
          {/* LINKS */}
          <nav className="hidden md:flex items-center gap-3 text-sm pr-4">
            <a href="#services" className="px-4 opacity-80 hover:opacity-100 text-lg">
              Serviços
            </a>
            <a href="#projects" className="px-4 opacity-80 hover:opacity-100 text-lg">
              Projetos
            </a>
            

            {/* <a
            href="#contact"
            className="px-4 py-2 rounded-md opacity-80 hover:opacity-100 bg-orange-400 text-lg text-white dark:bg-accent dark:text-black"
            >
              Contato
            </a> */}
          </nav>

          {/* CTA */}
          

          {/* THEME SWITCH */}
          <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                className="
                    relative w-12 h-6
                    flex items-center
                    rounded-full
                    bg-gray-300 dark:bg-gray-700
                    transition-colors
                    focus:outline-none
                "
                >
                
                {/* Sol */}
                <span
                    className={`
                    absolute right-1 text-xs
                    transition-opacity
                    ${theme === "dark" ? "opacity-0" : "opacity-100"}
                    `}
                >
                    ☀️
                </span>

                {/* Lua */}
                <span
                    className={`
                    absolute left-1 text-xs
                    transition-opacity
                    ${theme === "dark" ? "opacity-100" : "opacity-0"}
                    `}
                >
                    🌙
                </span>

                {/* Knob */}
                <span
                    className={`
                    absolute top-1
                    w-4 h-4
                    bg-white
                    rounded-full
                    transition-transform
                    ${theme === "dark" ? "translate-x-6" : "translate-x-1"}
                    `}
                />
            </button>

        </div>
      </div>
    </header>
  );
}

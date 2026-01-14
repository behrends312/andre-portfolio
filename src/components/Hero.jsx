import profile from "../assets/profile.jpg";
import { Linkedin, Github, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-8 sm:py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
        {/* IMG */}
        <img
          src={profile}
          alt="Carlos André Behrends"
          className="rounded-2xl object-cover grayscale w-full max-w-[520px] mx-auto md:mx-0"
        />

        {/* TEXT */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-2 break-words">
            Olá, eu sou Carlos André Behrends
          </h1>

          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Desenvolvedor Full Stack
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 break-words">
            Desenvolvedor Full Stack com{" "}
            <strong className="text-black dark:text-white">4+ anos de experiência</strong>{" "}
            em desenvolvimento web, com atuação do front-end ao back-end utilizando{" "}
            <strong className="text-black dark:text-white">
              React, Angular, Blazor, Node.js e C# (.NET)
            </strong>
            . Experiência completa no ciclo de vida da aplicação, da{" "}
            <strong className="text-black dark:text-white">arquitetura ao deploy em produção</strong>,
            incluindo{" "}
            <strong className="text-black dark:text-white">
              APIs RESTful, testes automatizados, pipelines de CI/CD, integração contínua e bancos de dados MongoDB e MySQL
            </strong>
            .
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
            <a
              href="https://www.linkedin.com/in/carlosandrebehrends/"
              target="_blank"
              className="flex items-center justify-center px-4 py-2 rounded-md opacity-90 hover:opacity-100 bg-orange-400 text-white dark:bg-accent dark:text-black"
              rel="noreferrer"
            >
              <Linkedin className="w-5 h-5 mr-2 text-white dark:text-black" />
              LinkedIn
            </a>

            <a
              href="https://github.com/behrends312"
              target="_blank"
              className="flex items-center justify-center px-4 py-2 rounded-md opacity-90 hover:opacity-100 bg-orange-400 text-white dark:bg-accent dark:text-black"
              rel="noreferrer"
            >
              <Github className="w-5 h-5 mr-2 text-white dark:text-black" />
              GitHub
            </a>

            <a
              href="/carlos-andre-behrendss-cv.pdf"
              download
              className="flex items-center justify-center px-4 py-2 rounded-md opacity-90 hover:opacity-100 bg-white border border-orange-400 text-orange-400 dark:bg-accent dark:border-accent dark:text-black"
            >
              <Download className="w-5 h-5 mr-2 text-orange-400 dark:text-black" />
              Currículo
            </a>
          </div>

          {/* METRICS */}
          <div className="grid grid-cols-2 gap-4 max-w-[520px] mx-auto md:mx-0">
            <div className="bg-[#F3F1E7] border border-black/10 rounded-xl p-5 text-center dark:bg-[#1D1C1B]">
              <p className="text-3xl font-bold">4+</p>
              <p className="text-sm text-gray-500">Anos de experiência</p>
            </div>

            <div className="bg-[#F3F1E7] border border-black/10 rounded-xl p-5 text-center dark:bg-[#1D1C1B]">
              <p className="text-3xl font-bold">10+</p>
              <p className="text-sm text-gray-500">Projetos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

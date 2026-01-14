import profile from "../assets/profile.jpg";
import { useLang } from "./LanguageContext";
import { Linkedin, Github, Download } from "lucide-react";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="pt-[80px] ">
      <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <img
          src={profile}
          className="rounded-2xl object-cover grayscale max-h-[520px] w-full"
        />

        <div>
          <h1 className="text-2xl font-semibold mb-2">
            Olá, eu sou Carlos André Behrends
          </h1>

          <p className="text-gray-400 mb-4">Desenvolvedor Full Stack</p>

          <p className="text-gray-400 max-w-xl mb-6">Desenvolvedor Full Stack com <strong className="dark:text-white"> 4+ anos de experiência </strong> em desenvolvimento web, com atuação do front-end ao back-end utilizando <strong className="dark:text-white"> React, Angular, Blazor, Node.js e C# (.NET). </strong>  Experiência completa no ciclo de vida da aplicação, da <strong className="dark:text-white">arquitetura ao deploy em produção </strong>, incluindo <strong className="dark:text-white"> APIs RESTful, testes automatizados, pipelines de CI/CD, integração contínua e bancos de dados MongoDB e MySQL. </strong></p>
          <div className="flex gap-4 mb-8">
            <a href="https://www.linkedin.com/in/carlosandrebehrends/" target="_blank" className="flex items-center justify-center px-4 py-2 rounded-md opacity-80 hover:opacity-100 bg-orange-400 cursor-pointer text-lg text-white dark:bg-accent dark:text-black"> <Linkedin className="w-5 h-5 mr-2 text-white dark:text-black" /> LinkedIn</a>
            <a href="https://github.com/behrends312" target="_blank" className="flex items-center justify-center px-4 py-2 rounded-md opacity-80 hover:opacity-100 bg-orange-400 cursor-pointer text-lg text-white dark:bg-accent dark:text-black"> <Github className="w-5 h-5 mr-2 text-white dark:text-black" /> GitHub</a>
            <a href="/carlos-andre-behrendss-cv.pdf" download className="flex items-center justify-center px-4 py-2 rounded-md opacity-80 hover:opacity-100 hover:bg-gray-100 bg-white border border-orange-400 cursor-pointer text-lg text-orange-400 border dark:bg-accent dark:border-accent dark:text-black"> <Download className="w-5 h-5 mr-2 text-orange-400 dark:text-black" /> Curriculo</a>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="w-[200px] bg-[#F3F1E7] border border-black/10 rounded-xl p-6 text-center dark:bg-[#1D1C1B]">
              <p className="text-3xl font-bold">4+</p>
              <p className="text-sm text-gray-500">Anos de experiência</p>
            </div>
            <div className="w-[200px] bg-[#F3F1E7] border border-black/10 rounded-xl p-6 text-center dark:bg-[#1D1C1B]">
              <p className="text-3xl font-bold">10+</p>
              <p className="text-sm text-gray-500">Projetos </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

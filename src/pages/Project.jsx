import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Project() {
  const { slug } = useParams();

  const project = useMemo(
    () => projects.find((p) => p.slug === slug),
    [slug]
  );

  if (!project) {
    return (
      <div className="min-h-screen pt-24 px-6 max-w-4xl mx-auto">
        <p className="text-lg">Projeto não encontrado.</p>
        <Link to="/" className="text-blue-500 underline">
          Voltar
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6 text-left">
        <Link to="/" className="text-sm text-gray-600 dark:text-gray-400 hover:underline">
          ← voltar
        </Link>

        <h1 className="text-3xl md:text-4xl font-semibold mt-4">
          {project.title}
        </h1>

        <p className="text-gray-600 dark:text-gray-400 mt-2">
          {project.subtitle}
        </p>

        {/* capa */}
        <div className="mt-8 rounded-2xl overflow-hidden border border-black/10 dark:border-white/10">
          <img
            src={project.cover}
            alt={project.title}
            className="w-full object-cover max-h-[520px]"
          />
        </div>

        {/* resumo */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-2">Sobre o Projeto</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.context}
            </p>
          </div>

          <div className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl p-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">Stack</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.stack.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-full border border-black/40 dark:border-white/10 text-gray-700 dark:text-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* highlights */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-3">Destaques</h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3">
                <span className="mt-2 w-2 h-2 rounded-full bg-blue-500" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* seções */}
        <div className="mt-12 space-y-10">
          {project.sections.map((s) => (
            <section key={s.title}>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {s.text}
              </p>
            </section>
          ))}
        </div>

        {/* galeria */}
        {project.gallery?.length ? (
          <div className="mt-12">
            <h2 className="text-xl font-semibold mb-4">
              Galeria
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((img, i) => (
                <img
                  key={img + i}
                  src={img}
                  alt={`${project.title} ${i + 1}`}
                  className="rounded-xl border border-black/10 dark:border-white/10 object-cover aspect-[16/10]"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </main>
  );
}

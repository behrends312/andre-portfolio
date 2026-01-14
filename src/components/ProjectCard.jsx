import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <article className="bg-black/5 p-4 dark:bg-white/5 border border-black/10 hover:border-black dark:border-white/10 dark:hover:border-white rounded-xl overflow-hidden text-left">
      {/* imagem */}
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={project.cover}
          alt={project.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          {project.subtitle}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.stack.slice(0, 8).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          to={`/projetos/${project.slug}`}
          className="mt-5 inline-flex items-center justify-center w-full px-4 py-2 rounded-md opacity-80 hover:opacity-100 bg-orange-400 text-white dark:bg-accent dark:text-black font-medium transition"
        >
          Ver detalhes
        </Link>
      </div>
    </article>
  );
}

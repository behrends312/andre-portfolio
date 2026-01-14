const skills = [
  "React",
  "Node.js",
  "TypeScript",
  "Tailwind",
  "MongoDB",
  "MySQL",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <h2 className="text-3xl text-center mb-12">
        What I Bring to the Table
      </h2>

      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        {skills.map((s) => (
          <div key={s}>
            <p className="mb-2">{s}</p>
            <div className="h-2 bg-gray-700 rounded">
              <div className="h-2 bg-gray-400 rounded w-4/5" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

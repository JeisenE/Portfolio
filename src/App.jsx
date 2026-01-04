import Image, {listTools,listLanguage,listProjects,} from "./data";

function App() {
  return (
    <>
      <section className="min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-violet-500 font-medium">
              Computer Science
            </span>

            <h1 className="text-5xl xl:text-6xl font-bold mt-4 mb-6">
              Hi, I’m{" "}
              <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                Jeisen Endrian
              </span>
            </h1>

            <p className="opacity-60 max-w-lg mb-8">
              I am a fifth-semester Computer Science student at Binus University, Alam Sutera,
              specializing in Software Engineering with a strong interest in artificial
              intelligence integration. I have experience in developing web applications and
              integrating AI models into real-world systems. I also have a strong understanding
              of SQL and data management, acquired through extensive coursework and hands-on
              projects involving database design, complex queries, and data-driven
              applications.
            </p>

            <div className="flex gap-4">
              <a
                href="https://drive.google.com/file/d/1CwndSwtkrdvidDCWZHoqBMbaGESMib2L/view?usp=drive_link"
                className="bg-violet-600 px-6 py-3 rounded-xl hover:bg-violet-500 transition"
              >
                Download CV
              </a>
              <a
                href="https://github.com/JeisenE"
                className="border border-zinc-700 px-6 py-3 rounded-xl hover:bg-zinc-800 transition"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute -inset-8 bg-violet-600/20 blur-3xl rounded-full"></div>
            <div className="relative rotate-3 hover:rotate-6 transition">
              <img
                src={Image.HeroImage}
                className="w-[460px] rounded-3xl border border-zinc-700 shadow-2xl"
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-40">
        <div className="mb-14">
          <h2 className="text-4xl font-bold mb-3">
            Selected Projects
          </h2>
          <p className="opacity-60 max-w-xl">
            A selection of projects I have worked on, including the technologies used.
          </p>
        </div>

        <div className="space-y-12">
          {listProjects.map((project, index) => (
            <div
              key={project.id}
              className={`
                grid lg:grid-cols-2 gap-8 items-center
                p-6 rounded-3xl border border-zinc-700
                bg-zinc-900/40 backdrop-blur
                ${index === listProjects.length - 1
                  ? "ring-2 ring-violet-500/40"
                  : ""}
              `}
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-2xl border border-zinc-700"
              />

              <div>
                <h3 className="text-2xl font-semibold mb-1">
                  {project.name}
                </h3>

                <span className="text-sm opacity-50">
                  {project.period}
                </span>

                <p className="opacity-60 mt-4 mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-zinc-800 border border-zinc-700 text-violet-400"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-40">
        <div className="mb-14">
          <h2 className="text-4xl font-bold mb-3">
            Tools & Tech Stack
          </h2>
          <p className="opacity-60 max-w-xl">
            Tools and technologies that I frequently use.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listTools.map((tool) => (
            <div
              key={tool.id}
              className="p-5 rounded-xl border border-zinc-700 bg-zinc-900/40 hover:border-violet-500 transition"
            >
              <div className="flex items-center gap-4">
                <img
                  src={tool.image}
                  className="w-14 p-2 rounded-lg bg-zinc-800"
                  alt={tool.name}
                />
                <div>
                  <h4 className="font-semibold">{tool.name}</h4>
                  <p className="text-sm opacity-60">{tool.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-40 mb-40">
        <div className="mb-14">
          <h2 className="text-4xl font-bold mb-3">
            Programming Languages
          </h2>
          <p className="opacity-60 max-w-xl">
            Programming languages used in application development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {listLanguage.map((lang) => (
            <div
              key={lang.id}
              className="p-6 rounded-2xl border border-zinc-700 bg-zinc-900/40 hover:border-violet-500 transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <img src={lang.image} className="w-10" alt={lang.name} />
                <div>
                  <h4 className="font-semibold">{lang.name}</h4>
                  <span className="text-sm opacity-60">{lang.level}</span>
                </div>
              </div>

              <div className="w-full h-2 bg-zinc-800 rounded-full">
                <div
                  className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"
                  style={{ width: `${lang.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default App;

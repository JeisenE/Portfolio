import Image, {
  listTools,
  listLanguage,
  listProyek,
} from "./data";

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
              Hi, Saya{" "}
              <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                Jeisen Endrian
              </span>
            </h1>

            <p className="opacity-60 max-w-lg mb-8">
              I am a Computer Science student in my fifth semester at Binus University, Alam Sutera, specializing in Software Engineering with a strong interest in artificial intelligence integration. Over the past years, I have worked on projects involving innovative website development and the implementation of existing AI models into web applications, allowing me to combine creativity, problem-solving, and technical expertise to deliver impactful and practical solutions.
            </p>

            <div className="flex gap-4">
              <a
                href="https://drive.google.com/file/d/1iLzuVA_PdrqQ6nrq7qzX-g2YenI85Hc7/view?usp=drive_link"
                className="bg-violet-600 px-6 py-3 rounded-xl hover:bg-violet-500 transition"
              >
                Download CV
              </a>
              <a
                href="https://github.com/JeisenE"
                className="border border-zinc-700 px-6 py-3 rounded-xl hover:bg-zinc-800 transition"
              >
                Github
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute -inset-8 bg-violet-600/20 blur-3xl rounded-full"></div>
            <div className="relative rotate-3 hover:rotate-6 transition">
              <img
                src={Image.HeroImage}
                className="w-[460px] rounded-3xl border border-zinc-700 shadow-2xl"
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
            Beberapa project yang pernah saya kerjakan, beserta
            teknologi dan pendekatan yang digunakan.
          </p>
        </div>

        <div className="space-y-12">
          {listProyek.map((item, index) => (
            <div
              key={item.id}
              className={`
                grid lg:grid-cols-2 gap-8 items-center
                p-6 rounded-3xl
                border border-zinc-700
                bg-zinc-900/40 backdrop-blur
                ${index === listProyek.length - 1
                  ? "ring-2 ring-violet-500/40"
                  : ""}
              `}
            >
              <img
                src={item.gambar}
                alt={item.nama}
                className="rounded-2xl border border-zinc-700"
              />

              <div>
                <h3 className="text-2xl font-semibold mb-3">
                  {item.nama}
                </h3>

                <p className="opacity-60 mb-5">
                  {item.desk}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="
                        px-3 py-1 text-sm rounded-full
                        bg-zinc-800 border border-zinc-700
                        text-violet-400
                      "
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
            Tools dan teknologi yang sering digunakan dalam pengembangan project.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listTools.map((tool) => (
            <div
              key={tool.id}
              className="
                p-5 rounded-xl
                border border-zinc-700
                bg-zinc-900/40
                hover:border-violet-500
                hover:-translate-y-1 transition
              "
            >
              <div className="flex items-center gap-4">
                <img
                  src={tool.gambar}
                  className="w-14 p-2 rounded-lg bg-zinc-800"
                />
                <div>
                  <h4 className="font-semibold">{tool.nama}</h4>
                  <p className="text-sm opacity-60">{tool.ket}</p>
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
            Bahasa pemrograman yang digunakan dalam pengembangan aplikasi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {listLanguage.map((lang) => (
            <div
              key={lang.id}
              className="
                p-6 rounded-2xl
                border border-zinc-700
                bg-zinc-900/40
                hover:border-violet-500 transition
              "
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={lang.gambar}
                  className="w-10"
                />
                <div>
                  <h4 className="font-semibold">{lang.nama}</h4>
                  <span className="text-sm opacity-60">
                    {lang.level}
                  </span>
                </div>
              </div>
              <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="
                    h-full rounded-full
                    bg-gradient-to-r from-violet-500 to-fuchsia-500
                    transition-all duration-700
                  "
                  style={{ width: `${lang.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default App;

import { Globe2, Compass, Users, Wand2 } from "lucide-react";

const features = [
  {
    icon: Globe2,
    title: "A living world",
    desc: "Dynamic biomes, day/night, and seasonal events that shape the experience.",
  },
  {
    icon: Compass,
    title: "Go anywhere",
    desc: "Seamless exploration from neon cities to mystic forests and floating isles.",
  },
  {
    icon: Users,
    title: "Play together",
    desc: "Jump in and party with friends. Co‑op missions, raids, and creator hubs.",
  },
  {
    icon: Wand2,
    title: "Create your story",
    desc: "Player tools to build bases, craft gear, and publish mini‑games.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_20%,rgba(139,92,246,0.12),transparent),radial-gradient(600px_300px_at_80%_10%,rgba(236,72,153,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Built for play</h2>
          <p className="mt-3 text-slate-300/90 max-w-2xl mx-auto">Simple to start, deep to master. Systems that spark creativity and hilarious moments.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-colors p-6 backdrop-blur shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-fuchsia-500 to-violet-600 text-white grid place-items-center shadow-[0_8px_30px_rgba(139,92,246,0.45)]">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-1.5 text-sm text-slate-300/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

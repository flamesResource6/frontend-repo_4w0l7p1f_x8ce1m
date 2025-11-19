import { Video, Play } from 'lucide-react'

export default function Trailer() {
  return (
    <section id="trailer" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="size-9 rounded-lg bg-fuchsia-500/15 text-fuchsia-300 flex items-center justify-center">
            <Video className="size-5" />
          </div>
          <span className="text-fuchsia-300/90 text-sm tracking-widest uppercase">Trailer</span>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8">
          <div className="lg:w-2/3 w-full">
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-white/10 shadow-2xl shadow-fuchsia-500/10">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-fuchsia-500/10 via-emerald-400/5 to-transparent" />
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1&color=white"
                  title="The Bosch Trailer"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 w-full">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Step into The Bosch</h2>
            <p className="mt-3 text-slate-400">Explore a boundless open world with your crew. Build, trade, battle, and shape the story together—all in real time.</p>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li className="flex items-start gap-3"><span className="mt-1 size-2 rounded-full bg-emerald-400"/>Dynamic world events every week</li>
              <li className="flex items-start gap-3"><span className="mt-1 size-2 rounded-full bg-fuchsia-400"/>Co-op raids and seasonal challenges</li>
              <li className="flex items-start gap-3"><span className="mt-1 size-2 rounded-full bg-cyan-400"/>Player-driven economy</li>
            </ul>
            <a href="#community" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-fuchsia-500 text-white px-4 py-2 shadow-lg shadow-fuchsia-500/30 hover:bg-fuchsia-400 transition">
              <Play className="size-4" /> Watch with the community
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

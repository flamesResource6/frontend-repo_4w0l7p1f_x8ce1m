import { MessageCircle, DiscordLogoIcon } from 'lucide-react'

export default function Community() {
  return (
    <section id="community" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="size-9 rounded-lg bg-emerald-500/15 text-emerald-300 flex items-center justify-center">
            <MessageCircle className="size-5" />
          </div>
          <span className="text-emerald-300/90 text-sm tracking-widest uppercase">Community</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <h3 className="text-2xl font-semibold">Join the Discord</h3>
            <p className="mt-2 text-slate-400">Chat with other explorers, find groups, get dev updates, and share your best clips.</p>
            <a
              href="https://discord.com/invite/" target="_blank" rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-emerald-500 text-black font-medium px-4 py-2 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" className="w-5 h-5" aria-hidden>
                <path fill="currentColor" d="M107.7 8.07A105.15 105.15 0 0081.54.8a72.06 72.06 0 00-3.36 6.91 97.68 97.68 0 00-29.21 0A72.37 72.37 0 0045.61.8 105.89 105.89 0 0019.39 8.1C2.79 32.65-1.71 56.6.54 80.21a105.73 105.73 0 0032.15 16.15 77.7 77.7 0 006.9-11.2 68.42 68.42 0 01-10.86-5.17c.91-.66 1.8-1.35 2.66-2.05a70.61 70.61 0 0061.16 0c.87.71 1.76 1.39 2.66 2.05a68.68 68.68 0 01-10.88 5.18 77.22 77.22 0 006.9 11.2A105.25 105.25 0 00126.6 80.2c2.5-25.81-4.22-49.67-18.9-72.13zM42.45 65.86c-5.9 0-10.73-5.52-10.73-12.33s4.76-12.34 10.73-12.34S53.2 46.73 53.2 53.54s-4.76 12.32-10.75 12.32zm42.24 0c-5.9 0-10.73-5.52-10.73-12.33s4.76-12.34 10.73-12.34S95.44 46.73 95.44 53.54 90.68 65.86 84.69 65.86z"/>
              </svg>
              Join Discord
            </a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
            <h4 className="text-lg font-semibold">Latest updates</h4>
            <ul className="mt-3 space-y-3 text-sm text-slate-300">
              <li>• Season 2 launches next week — new biome, new raid.</li>
              <li>• Creator program signups now open.</li>
              <li>• QoL patch: faster matchmaking and party finder.</li>
            </ul>
            <a href="#" className="mt-4 inline-block text-emerald-300 hover:text-emerald-200">Read the blog →</a>
          </div>
        </div>
      </div>
    </section>
  )
}

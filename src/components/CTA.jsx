export default function CTA() {
  return (
    <section id="cta" className="relative py-16 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_20%_50%,rgba(236,72,153,0.1),transparent),radial-gradient(700px_350px_at_80%_50%,rgba(139,92,246,0.1),transparent)]" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-900/60 p-6 sm:p-10 backdrop-blur shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Ready to jump in?</h3>
              <p className="mt-2 text-slate-300/90">Grab your friends, claim a name, and enter a world that loves to play back.</p>
            </div>
            <div className="flex md:justify-end">
              <a href="#" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-violet-600 px-6 py-3 text-white font-semibold shadow-[0_10px_40px_rgba(139,92,246,0.5)] hover:shadow-[0_14px_50px_rgba(139,92,246,0.65)] transition-shadow">
                Download Launcher
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

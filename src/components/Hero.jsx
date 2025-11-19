import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[82vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/30 to-slate-950"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-end pb-16">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-[11px] uppercase tracking-widest text-slate-200/90 backdrop-blur">
            Multiplayer • Open World • Co‑op • PvE
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_8px_40px_rgba(139,92,246,0.25)]">
            The Bosch
          </h1>
          <p className="mt-3 max-w-xl text-slate-200/90 text-base sm:text-lg">
            A playful, living world where exploration, creativity and chaos collide. Party up, build, and discover your story.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-violet-600 px-6 py-3 text-white font-semibold shadow-[0_10px_40px_rgba(139,92,246,0.5)] hover:shadow-[0_14px_50px_rgba(139,92,246,0.65)] transition-shadow">
              Play Free
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-white font-semibold hover:bg-white/10 transition-colors">
              See Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

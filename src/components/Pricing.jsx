const tiers = [
  {
    name: "Free",
    price: "$0",
    tagline: "Jump in and explore",
    features: ["Core game", "Public servers", "Starter cosmetics"],
    cta: "Play Now",
    highlight: false,
  },
  {
    name: "Plus",
    price: "$7/mo",
    tagline: "Level up your experience",
    features: ["Private worlds", "Creator tools", "Monthly drops"],
    cta: "Start Plus",
    highlight: true,
  },
  {
    name: "Pro",
    price: "$14/mo",
    tagline: "For world builders",
    features: ["Advanced editor", "Server modding", "Revenue share"],
    cta: "Go Pro",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(700px_350px_at_80%_80%,rgba(14,165,233,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple pricing</h2>
          <p className="mt-3 text-slate-300/90 max-w-2xl mx-auto">Play free, upgrade when you want. Cancel anytime.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`relative rounded-2xl border ${t.highlight ? 'border-violet-400/40' : 'border-white/10'} bg-white/[0.03] p-6 backdrop-blur shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]`}> 
              {t.highlight && (
                <div className="absolute -top-3 right-6 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-600 px-3 py-1 text-xs text-white shadow-[0_8px_30px_rgba(139,92,246,0.45)]">Popular</div>
              )}
              <h3 className="text-white font-semibold text-lg">{t.name}</h3>
              <p className="text-3xl font-extrabold text-white mt-2">{t.price}</p>
              <p className="text-sm text-slate-300/80 mt-1">{t.tagline}</p>
              <ul className="mt-5 space-y-2">
                {t.features.map((f) => (
                  <li key={f} className="text-sm text-slate-200/90">• {f}</li>
                ))}
              </ul>
              <a href="#cta" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 font-semibold text-white ${t.highlight ? 'bg-gradient-to-br from-fuchsia-500 to-violet-600 shadow-[0_10px_40px_rgba(139,92,246,0.5)]' : 'border border-white/15 bg-white/5 hover:bg-white/10'} transition` }>
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

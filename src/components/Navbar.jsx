import { Menu, Gamepad2 } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Community", href: "#community" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-md shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-3 group">
              <div className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-fuchsia-500 to-violet-600 text-white shadow-[0_0_25px_rgba(139,92,246,0.5)]">
                <Gamepad2 className="w-6 h-6" />
              </div>
              <div className="leading-tight">
                <p className="text-white font-semibold tracking-tight group-hover:text-violet-200 transition-colors">The Bosch</p>
                <p className="text-xs text-violet-300/70">Open‑world multiplayer</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-slate-200/80 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#cta"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-fuchsia-500 to-violet-600 px-4 py-2 text-white text-sm font-medium shadow-[0_8px_30px_rgba(139,92,246,0.45)] hover:shadow-[0_8px_40px_rgba(139,92,246,0.6)] transition-shadow"
              >
                Play Free
              </a>
            </nav>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 text-slate-100"
              aria-label="Toggle menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-slate-200/90 hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#cta"
                className="block text-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-violet-600 px-4 py-2 text-white font-medium"
              >
                Play Free
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

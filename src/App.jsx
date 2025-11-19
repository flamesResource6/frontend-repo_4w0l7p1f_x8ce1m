import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Trailer from './components/Trailer'
import Screenshots from './components/Screenshots'
import Community from './components/Community'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* background glows */}
      <div className="fixed inset-0 -z-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[900px] rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute top-40 right-0 h-[420px] w-[520px] rounded-full bg-violet-600/10 blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Trailer />
        <Screenshots />
        <Community />
        <Pricing />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10 mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} The Bosch. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#community" className="hover:text-white">Community</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

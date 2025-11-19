import { Image as ImageIcon } from 'lucide-react'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1600&auto=format&fit=crop',
    alt: 'Open world vista',
  },
  {
    src: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1600&auto=format&fit=crop',
    alt: 'Character gear and inventory',
  },
  {
    src: 'https://images.unsplash.com/photo-1705237100179-cc9963bf6abf?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDaGFyYWN0ZXIlMjBnZWFyJTIwYW5kJTIwaW52ZW50b3J5fGVufDB8MHx8fDE3NjM1NjU4NDF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Co-op raid encounter',
  },
  {
    src: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
    alt: 'Night market district',
  },
  {
    src: 'https://images.unsplash.com/photo-1723688743324-d971fc428621?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOaWdodCUyMG1hcmtldCUyMGRpc3RyaWN0fGVufDB8MHx8fDE3NjM1NjU4NDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Hoverbike racing',
  },
  {
    src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop',
    alt: 'Guild headquarters',
  },
]

export default function Screenshots() {
  return (
    <section id="screenshots" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="size-9 rounded-lg bg-cyan-500/15 text-cyan-300 flex items-center justify-center">
            <ImageIcon className="size-5" />
          </div>
          <span className="text-cyan-300/90 text-sm tracking-widest uppercase">Screenshots</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((img, i) => (
            <figure key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
              <img src={img.src} alt={img.alt} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 p-3 text-xs text-slate-300 bg-gradient-to-t from-slate-950/80 to-transparent">
                {img.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

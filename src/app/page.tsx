import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 md:px-10 lg:px-16">
      <NavBar />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}

function NavBar() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between py-4 px-6 bg-black/30 backdrop-blur-md border-b border-white/10">
      <Link href="#" className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-xl bg-primary-500"/>
        <span className="font-semibold tracking-wide text-white">ModernBrand</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
        <Link href="#features" className="hover:text-white">Características</Link>
        <Link href="#precios" className="hover:text-white">Precios</Link>
        <Link href="#faq" className="hover:text-white">FAQ</Link>
        <Link href="#" className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition">Ingresar</Link>
      </nav>
      <button className="md:hidden rounded-xl border border-white/10 px-3 py-2 text-sm text-white">Menú</button>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative grid lg:grid-cols-2 items-center gap-10 pt-16 pb-20">
      <div className="space-y-6 fade-in">
        <h1 className="text-5xl font-bold leading-tight text-white drop-shadow-lg">
          Construye experiencias web <span className="text-primary-400">rápidas</span> y <span className="text-primary-400">elegantes</span>
        </h1>
        <p className="text-lg text-white/80 max-w-xl">
          Starter minimalista con Next.js y Tailwind. Perfecto para lanzar tu MVP o landing en minutos y desplegarlo en Vercel sin dolores de cabeza.
        </p>
        <div className="flex gap-4">
          <a href="#" className="px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-700 transition text-white font-semibold">Comenzar gratis</a>
          <a href="#features" className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition text-white">Ver características</a>
        </div>
      </div>
      <div className="relative h-[360px] md:h-[460px] rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
        <div className="absolute inset-0 opacity-60" style={{
          background:
            "radial-gradient(400px 200px at 20% 20%, rgba(139,92,246,.25), transparent)," +
            "radial-gradient(300px 150px at 80% 30%, rgba(139,92,246,.25), transparent)"
        }} />
        <div className="relative p-6">
          <pre className="mt-3 text-sm bg-black/30 rounded-xl p-4 overflow-auto text-white">
{`import Next from 'next';
import Tailwind from 'tailwindcss';

export const build = () => "Deploy listo en Vercel 🚀";`}
          </pre>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    {
      title: "Rendimiento superior",
      desc: "SSR/ISR con Next.js y estilos utilitarios con Tailwind para sitios veloces.",
    },
    {
      title: "Diseño moderno",
      desc: "Gradientes, glassmorphism y componentes accesibles listos para usar.",
    },
    {
      title: "Despliegue 1‑click",
      desc: "Integración nativa con Vercel. CI/CD automático al hacer push a main.",
    },
  ];

  return (
    <section id="features" className="py-10 md:py-16">
      <h2 className="text-3xl font-semibold text-white mb-8">Características clave</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => (
          <article key={it.title} className="rounded-2xl border border-white/10 bg-white/[.03] p-6 text-white">
            <div className="h-10 w-10 rounded-xl bg-primary-600/40 border border-primary-400/30" />
            <h3 className="mt-4 text-lg font-medium">{it.title}</h3>
            <p className="mt-2 text-white/70 text-sm">{it.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="my-16 rounded-2xl border border-white/10 bg-gradient-to-br from-primary-600/40 to-primary-800/40 p-8 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-white">¿List@ para lanzar tu sitio?</h2>
      <p className="mt-2 text-white/80">Crea tu repositorio, conecta con Vercel y despliega en minutos.</p>
      <div className="mt-6 flex justify-center gap-3">
        <a href="https://vercel.com" target="_blank" className="px-5 py-3 rounded-xl bg-white text-black font-medium">Deploy en Vercel</a>
        <a href="#" className="px-5 py-3 rounded-xl border border-white/20 hover:bg-white/10 text-white">Ver documentación</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-white/60">
      <p>© 2025 ModernBrand. Todos los derechos reservados.</p>
    </footer>
  );
}
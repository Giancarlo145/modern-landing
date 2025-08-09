import Link from "next/link";

export default function HomePage() {
  // OJO: el <NavBar /> y <Footer /> ya viven en layout.tsx.
  // Aquí solo devolvemos las secciones de la home.
  return (
    <>
      <Hero />
      <Features />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative grid lg:grid-cols-2 items-center gap-10 pt-16 pb-20">
      <div className="space-y-6">
        <h1 className="text-5xl font-bold leading-tight text-white drop-shadow-lg">
          Construye experiencias web{" "}
          <span className="text-primary-400">rápidas</span> y{" "}
          <span className="text-primary-400">elegantes</span>
        </h1>
        <p className="text-lg text-white/80 max-w-xl">
          Starter minimalista con Next.js y Tailwind. Perfecto para lanzar tu
          MVP o landing en minutos y desplegarlo en Vercel sin dolores de cabeza.
        </p>
        <div className="flex gap-4">
          <Link
            href="/pricing"
            className="px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-700 transition text-white font-semibold"
          >
            Comenzar gratis
          </Link>
          <Link
            href="/#features"
            className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition text-white"
          >
            Ver características
          </Link>
        </div>
      </div>

      <div className="relative h-[360px] md:h-[460px] rounded-2xl bg-white/5 border border-white/10 overflow-hidden p-6">
        <div className="mb-4 text-sm text-white/70 font-medium">Listo para producir</div>
        <div className="rounded-xl border border-white/10 bg-black/30 p-5 space-y-3">
          <div className="text-white/90 font-semibold">Lanza tu sitio en minutos</div>
          <ul className="text-white/75 text-sm list-disc pl-5 space-y-1">
            <li>UI moderna con Tailwind</li>
            <li>SEO y Analytics incluidos</li>
            <li>Deploy 1‑click en Vercel</li>
          </ul>
          <Link
            href="/pricing"
            className="inline-block mt-2 text-sm underline text-primary-300 hover:text-primary-200"
          >
            Ver planes →
          </Link>
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
          <article
            key={it.title}
            className="rounded-2xl border border-white/10 bg-white/[.03] p-6 text-white"
          >
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
      <h2 className="text-2xl md:text-3xl font-semibold text-white">
        ¿List@ para lanzar tu sitio?
      </h2>
      <p className="mt-2 text-white/80">
        Crea tu repositorio, conecta con Vercel y despliega en minutos.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Link href="/pricing" className="px-5 py-3 rounded-xl bg-white text-black font-medium">
          Ver planes
        </Link>
        <Link
          href="/contacto"
          className="px-5 py-3 rounded-xl border border-white/20 hover:bg-white/10 text-white"
        >
          Contacto
        </Link>
      </div>
    </section>
  );
}

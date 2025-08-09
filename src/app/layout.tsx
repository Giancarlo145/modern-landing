import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Modern Landing",
  description: "Landing moderna con Next.js + Tailwind",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen gradient-primary">
        <NavBar />
        <main className="px-6 md:px-10 lg:px-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function NavBar() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between py-4 px-6
      bg-black/30 backdrop-blur-md border-b border-white/10">
      <Link href="/" className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-xl bg-primary-500" />
        <span className="font-semibold tracking-wide text-white">ModernBrand</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
        <Link href="/#features" className="hover:text-white">Características</Link>
        <Link href="/pricing" className="hover:text-white">Precios</Link>
        <Link href="/faq" className="hover:text-white">FAQ</Link>
        <Link href="/contacto" className="hover:text-white">Contacto</Link>
        <Link href="/blog" className="hover:text-white">Blog</Link>
        <Link href="#" className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition">Ingresar</Link>
      </nav>
      <button className="md:hidden rounded-xl border border-white/10 px-3 py-2 text-sm text-white">Menú</button>
    </header>
  );
}

function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-white/60">
      <p>© 2025 ModernBrand. Todos los derechos reservados.</p>
    </footer>
  );
}

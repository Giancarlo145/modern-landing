export const metadata = {
  title: "Preguntas frecuentes | ModernBrand",
  description: "Resuelve tus dudas frecuentes sobre ModernBrand.",
};

const faqs = [
  { q: "¿Cómo funciona el plan gratis?", a: "El plan gratis incluye 1 proyecto con soporte básico." },
  { q: "¿Puedo cambiar de plan en cualquier momento?", a: "Sí, puedes cambiar o cancelar tu plan en cualquier momento desde tu cuenta." },
  { q: "¿Ofrecen soporte para empresas?", a: "Sí, nuestro plan Empresa incluye soporte dedicado e integraciones avanzadas." },
];

export default function FAQPage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-12 text-center">Preguntas frecuentes</h1>
      <div className="space-y-6">
        {faqs.map((item) => (
          <details key={item.q} className="border border-white/10 rounded-xl p-4 bg-white/5">
            <summary className="cursor-pointer font-medium text-lg">{item.q}</summary>
            <p className="mt-2 text-white/80">{item.a}</p>
          </details>
        ))}
      </div>
    </main>
  );
}
export const metadata = {
  title: "Planes y precios | ModernBrand",
  description: "Planes y precios en MXN para tu proyecto web con ModernBrand.",
};

const plans = [
  { name: "Gratis", price: "$0 MXN", features: ["1 proyecto", "Soporte básico", "Actualizaciones limitadas"] },
  { name: "Pro", price: "$199 MXN/mes", features: ["Proyectos ilimitados", "Soporte prioritario", "Actualizaciones automáticas"] },
  { name: "Empresa", price: "$499 MXN/mes", features: ["Todo en Pro", "Soporte dedicado", "Integraciones avanzadas"] },
];

export default function PricingPage() {
  return (
    <main className="max-w-5xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">Planes y precios</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div key={plan.name} className="border border-white/10 rounded-2xl p-6 bg-white/5">
            <h2 className="text-xl font-semibold mb-4">{plan.name}</h2>
            <p className="text-2xl font-bold text-primary-400 mb-6">{plan.price}</p>
            <ul className="mb-6 space-y-2 text-white/80">
              {plan.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            <button className="w-full px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-xl font-medium">Elegir</button>
          </div>
        ))}
      </div>
    </main>
  );
}
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // aquí luego conectamos Resend/EmailJS
    setEnviado(true);
  };

  if (enviado) {
    return (
      <p className="text-center text-green-400">
        ¡Gracias por tu mensaje! Te responderemos pronto.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={form.nombre}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10"
      />
      <textarea
        name="mensaje"
        placeholder="Mensaje"
        value={form.mensaje}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 min-h-32"
      />
      <button
        type="submit"
        className="w-full px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-xl font-medium"
      >
        Enviar
      </button>
    </form>
  );
}

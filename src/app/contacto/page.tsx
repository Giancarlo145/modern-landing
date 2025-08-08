import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contacto | ModernBrand',
  description: 'Envíanos un mensaje con tus dudas o comentarios.',
};

export default function ContactoPage() {
  return (
    <main className="max-w-xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Contáctanos</h1>
      <ContactForm />
    </main>
  );
}

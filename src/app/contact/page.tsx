import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <div className="flex flex-col gap-8 max-w-lg">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Contact</h1>
        <p className="mt-2 text-muted">Got a question or want to work together? Send me a message.</p>
      </div>

      <ContactForm />
    </div>
  );
}

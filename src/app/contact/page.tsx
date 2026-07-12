import type { Metadata } from "next";
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: "Contact",
  description: "Got a question or want to work together? Send Your Name a message.",
  openGraph: {
    title: "Contact | PersonalSite",
    description: "Got a question or want to work together? Send Your Name a message.",
  },
};

export default function Contact() {
  return (
    <div className="flex flex-col gap-8 max-w-lg">
      <div>
        <h1 className="font-serif text-3xl font-bold text-foreground">Contact</h1>
        <p className="mt-2 text-muted">Got a question or want to work together? Send me a message.</p>
      </div>

      <ContactForm />
    </div>
  );
}

import { Navbar } from "@/components/layout/navbar";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/layout/footer";

export default function ContattiPage() {
  return (
    <main className="min-h-screen text-white relative pt-20">
      <Navbar />
      <ContactSection />
      <Footer />
    </main>
  );
}

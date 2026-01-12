import { About } from "@/modules";
import { Header, Footer } from "@/shared";

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <main >
        <About />
      </main>
      <Footer />
    </div>
  );
}

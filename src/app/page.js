import { Home } from "@/modules";
import { Header, Footer } from "@/shared";

export default function Page() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <main >
        <Home />
      </main>
      <Footer />
    </div>
  );
}

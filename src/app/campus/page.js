import { Campus } from "@/modules";
import { Header, Footer } from "@/shared";

export default function CampusPage() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <main >
        <Campus />
      </main>
      <Footer />
    </div>
  );
}

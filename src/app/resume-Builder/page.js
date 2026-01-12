import { ResumeBuilder } from "@/modules";
import { Header, Footer } from "@/shared";

export default function ResumeBuilderPage() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <main >
        <ResumeBuilder />
      </main>
      <Footer />
    </div>
  );
}

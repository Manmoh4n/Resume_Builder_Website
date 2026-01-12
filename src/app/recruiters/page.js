import { Recruiters } from "@/modules";
import { Header, Footer } from "@/shared";

export default function RecruitersPage() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <main >
        <Recruiters />
      </main>
      <Footer />
    </div>
  );
}

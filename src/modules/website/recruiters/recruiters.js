import { Faq } from "@/shared";
import { CollegeNetwork, HiringChallenges, HowItWorks, RecruiterBanner, RecruiterClients, HireSmarter, UsedByRecruiter, DesignedForPeople, Plan, UniqueHiring, WhyRecruitWithUs} from "./components";

export const Recruiters = () => {
  return (
    <div className="relative bg-[#FDFFFF]">
      <RecruiterBanner />
      <RecruiterClients />
      <WhyRecruitWithUs />
      <CollegeNetwork />
      <HowItWorks />
      <HiringChallenges />
      <HireSmarter />
      <UsedByRecruiter />
      <DesignedForPeople />
      <Plan />
      <UniqueHiring />
      <section>
        <Faq textColor="text-black"/>
      </section>
    </div>
  );
};

export default Recruiters;
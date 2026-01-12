"use client";
import { Faq } from "@/shared";
import { HomeBanner, HowItWorks, TrustedBy, WhosFor, LetsBuild, ProductOverview, SuccessStory, NumbersThatMatter } from "./components";

export const Home = () => {
  return (
    <div className="relative bg-home-gradient">
      <HomeBanner />
      <TrustedBy />
      <WhosFor />
      <NumbersThatMatter />
      <HowItWorks />
      <ProductOverview />
      <SuccessStory />
      <LetsBuild />
      <section className="bg-home-faqs">
        <Faq textColor="text-white"/>
      </section>
    </div>
  );
};

export default Home;
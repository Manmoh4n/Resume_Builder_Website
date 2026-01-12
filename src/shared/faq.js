import React from "react";
import { Separator } from "@/shared";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion";
import Dummydata from "@/assets/json/faq.json"
 
export default function Faq({textColor}) {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <h2 className={`text-base md:text-2xl font-bold ${textColor} text-center mb-4`}>Frequently Asked Questions.</h2>
      <Separator className="w-40 bg-separtor-line" />
      <Accordion type="single" collapsible className="space-y-3 lg:mt-14 mt-8">
        {Dummydata.faqData.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="rounded-xl bg-white shadow-lg border-none">
            <AccordionTrigger className=" flex items-center justify-between px-6 py-5 text-left font-semibold text-sm md:text-base text-[#0F172A] hover:no-underline [&>svg]:bg-[#F1F2F9] data-[state=open]:[&>svg]:bg-brand-blue data-[state=open]:[&>svg]:text-white [&>svg]:rounded-full [&>svg]:w-8 [&>svg]:h-8 [&>svg]:p-1">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 text-sm text-gray-600 leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
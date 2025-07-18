import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const faq = [
  {
    question: "登録できるキーワード数は？",
    answer:
      "ベータ版では50件のキーワードの登録が可能です。ベータ版終了後は変動する可能性があります。",
  },
  {
    question: "どの媒体をモニタリングしていますか？",
    answer: "国内の主要Webニュースサイトを中心に、順次拡大予定です。",
  },
  {
    question: "料金体系はどうなっていますか？",
    answer:
      "ベータ版期間は先着20社限定で無料でご利用いただけます。20社を超えるお申し込みがあった場合も、業界最安水準での提供を予定しております。",
  },
  {
    question: "ベータ版の期間はいつまでですか？",
    answer: "現時点ではベータ版終了の時期は定めておりません。",
  },
];

const FAQ = () => {
  return (
    <div className="flex items-center justify-center px-6 py-6 md:pt-20 md:pb-10">
      <div className="w-full max-w-2xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl !leading-[1.15] font-bold tracking-tight text-center">
          よくあるご質問
        </h2>

        <Accordion type="single" collapsible className="mt-8 space-y-4">
          {faq.map(({ question, answer }, index) => (
            <AccordionItem
              key={question}
              value={`question-${index}`}
              className="bg-accent py-1 px-4 rounded-xl border-none"
            >
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger
                  className={cn(
                    "flex flex-1 items-center justify-between py-4 font-semibold tracking-tight transition-all cursor-pointer [&[data-state=open]>svg]:rotate-45",
                    "text-start text-lg"
                  )}
                >
                  {question}
                  <PlusIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;

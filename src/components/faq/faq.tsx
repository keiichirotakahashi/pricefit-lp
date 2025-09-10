import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const faq = [
  {
    question: "価格調査に対応しているサイトは？",
    answer:
      "Amazon、楽天市場、Yahoo!ショッピングに対応しています。順次、他モールや価格比較サイトへの対応も検討しています。",
  },
  {
    question: "1日に複数回の調査は可能ですか？",
    answer:
      "はい。標準で1日数回の調査に対応しており、オプションで10分ごとなど高頻度の調査にも対応予定です。",
  },
  {
    question: "ポイントや送料は考慮されますか？",
    answer:
      "いいえ。現在は本体価格を取得対象としていますが、将来的に送料やクーポンを含めた「実質価格」での比較機能を追加予定です。",
  },
  {
    question: "自動価格更新はできますか？",
    answer:
      "はい。設定した下限価格や利益率を守りながら、自社価格を自動で更新できます。自社同士の出品での「値下げ合戦」を避ける仕組みも備えています。",
  },
  {
    question: "利用料金はいくらですか？",
    answer:
      "ベータ版期間は先着20社限定で無料でご利用いただけます。20社を超える場合や正式リリース後も、業界最安水準での提供を予定しています。",
  },
  {
    question: "無料トライアルはありますか？",
    answer:
      "はい。現在は先着20社限定でベータ版を無料提供しています。ベータ版は期間制限なく無料でご利用いただけます。20社を超える場合や正式リリース後は、2週間程度の無料トライアルをご用意する予定です。",
  },
  {
    question: "最低利用期間はありますか？",
    answer: "いいえ。最低利用期間の縛りはなく、1ヶ月単位でのご契約となります。",
  },
];

const FAQ = () => {
  return (
    <div className="flex items-center justify-center px-6 py-6 md:pt-20 md:pb-16">
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
                  <PlusIcon className="h-5 w-5 shrink-0 text-primary transition-transform duration-200" />
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

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Automation from "./automation";
import Budget from "./budget";
import Outcome from "./outcome";

const solutions = [
  {
    category: "自動化",
    title: "価格の調査と更新を自動化",
    details:
      "カンタンな設定をするだけで、競合価格の調査から自社価格の更新までを自動で実行。人手に頼らず、常に理想の価格をキープできます。",
    tutorialLink: "#contact",
    Illustration: Automation,
  },
  {
    category: "利益最大化",
    title: "最適な価格設定で利益を最大化",
    details:
      "最安値に追随するだけでなく、設定した下限・上限や利益率を考慮して価格を調整。売れる価格をキープしながら、しっかり利益も残せます。",
    tutorialLink: "#contact",
    Illustration: Outcome,
  },
  {
    category: "低い導入ハードル",
    title: "シンプルかつおトクで気軽に試せる",
    details:
      "必要な機能に絞ったシンプルな操作性で誰でも迷わずに使えます。また業界最安水準の料金のため気軽に試すことができます。",
    tutorialLink: "#contact",
    Illustration: Budget,
  },
];

const Solutions = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-screen-lg w-full py-8 md:py-12 px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl md:leading-[3.5rem] font-bold tracking-tight max-w-xl text-center md:mx-auto">
          PriceFitがまるごと解決
        </h2>
        <div className="mt-10 md:mt-16 w-full mx-auto space-y-12 md:space-y-16 lg:space-y-20">
          {solutions.map((solution) => (
            <div
              key={solution.category}
              className="flex flex-col md:flex-row items-center gap-x-8 md:gap-x-12 lg:gap-x-16 gap-y-8 md:gap-y-10 md:odd:flex-row-reverse"
            >
              <div className="flex items-center justify-center w-full aspect-[6/4] basis-1/2 md:basis-1/2 p-4 md:p-6">
                <solution.Illustration />
              </div>
              <div className="basis-1/2 shrink-0">
                <span className="uppercase font-semibold text-sm text-muted-foreground">
                  {solution.category}
                </span>
                <h4 className="my-3 text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
                  {solution.title}
                </h4>
                <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed">
                  {solution.details}
                </p>
                <Button asChild className="mt-6 rounded-full min-w-40 text-[15px] cursor-pointer">
                  <Link href={solution.tutorialLink}>
                    お問い合わせ <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;

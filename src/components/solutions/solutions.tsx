import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Automation from "./automation";
import Budget from "./budget";
import Outcome from "./outcome";

const solutions = [
  {
    category: "自動化",
    title: "Webクリッピングを自動化",
    details:
      "キーワードを登録するだけで、自動的にWebの掲載情報を収集します。最大50件のキーワードを登録できるので、自社ブランドはもちろん、競合ブランドや注目テーマも見逃しません。",
    tutorialLink: "#contact",
    Illustration: Automation,
  },
  {
    category: "見える化",
    title: "広報・PR活動の成果を見える化",
    details:
      "キーワードごとの掲載数を日ごとにグラフ化するだけでなく、プレスリリース/パブリシティ分類やポジ/ネガ分析も自動化します。使い始めた日から広報・PR活動の成果を見える化します。",
    tutorialLink: "#contact",
    Illustration: Outcome,
  },
  {
    category: "シンプル・おトク",
    title: "シンプルかつおトクで気軽に試せる",
    details:
      "必要な機能に絞ったシンプルな操作性で誰でも迷わずに使えます。また業界最安水準の料金（ベータ版限定で先着20社無料！）のため気軽に試すことができます。",
    tutorialLink: "#contact",
    Illustration: Budget,
  },
];

const Solutions = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-screen-lg w-full py-8 md:py-12 px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl md:leading-[3.5rem] font-bold tracking-tight max-w-xl text-center md:mx-auto">
          ClipBaseがまるごと解決
        </h2>
        <div className="mt-10 md:mt-16 w-full mx-auto space-y-12 md:space-y-16 lg:space-y-20">
          {solutions.map((solution) => (
            <div
              key={solution.category}
              className="flex flex-col md:flex-row items-center gap-x-8 md:gap-x-12 lg:gap-x-16 gap-y-8 md:gap-y-10 md:odd:flex-row-reverse"
            >
              <div className="flex items-center justify-center w-full aspect-[6/4] basis-1/2 md:basis-1/2 p-4 md:p-6">
                <div className="scale-110 md:scale-125">
                  <solution.Illustration />
                </div>
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

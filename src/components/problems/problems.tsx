import Backlash from "./backlash";
import SmallBudget from "./small-budget";
import TimeConsuming from "./time-consuming";

const problems = [
  {
    title: "自社掲載記事の収集に\n多くの時間を費やしている",
    description:
      "プレスリリースの転載や自社掲載記事を手作業で収集するのに忙しく、競合の動向やトレンドを把握することができない",
    Illustration: TimeConsuming,
  },
  {
    title: "広報・PR活動の効果測定ができていない",
    description:
      "時間軸での掲載数比較やポジティブ／ネガティブ評価などの分析が難しく、広報・PR業務の成果が見えづらい",
    Illustration: Backlash,
  },
  {
    title: "既存のツールは複雑かつ\n高価で導入ハードルが高い",
    description:
      "既存のツールは高機能ゆえに設定や運用が煩雑で、価格も高額なため気軽に試すことができない",
    Illustration: SmallBudget,
  },
];

const Problems = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-screen-lg w-full py-8 md:py-12 px-6 md:px-0">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-center leading-tight">
          広報・PRでこんなお悩みはありませんか？
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 max-w-md sm:max-w-screen-md lg:max-w-screen-lg w-full mx-auto px-6">
          {problems.map((problem) => (
            <div key={problem.title} className="flex flex-col text-start">
              <div className="flex items-center justify-center mb-4 sm:mb-6 w-full p-5 min-h-[220px]">
                <problem.Illustration />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-center leading-tight whitespace-pre-line">
                {problem.title}
              </h3>
              <p className="mt-3 text-muted-foreground text-base sm:text-[17px] text-center leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Problems;

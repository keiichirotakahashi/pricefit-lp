import Backlash from "./backlash";
import SmallBudget from "./small-budget";
import TimeConsuming from "./time-consuming";

const problems = [
  {
    title: "価格調査と価格更新に\n多くの時間を費やしている",
    description:
      "競合商品を検索して価格をExcelにまとめ、必要に応じて価格を変更…この繰り返しに多くの時間を取られ、売上を伸ばすための施策に手が回らない。",
    Illustration: TimeConsuming,
  },
  {
    title: "最適な価格設定ができず\n利益を最大化できていない",
    description:
      "高すぎて売れない、安すぎて利益を削ってしまう。価格の見直しが追いつかず、売上・利益の機会を逃してしまう。",
    Illustration: Backlash,
  },
  {
    title: "既存のツールは複雑かつ\n高価で導入ハードルが高い",
    description: "既存のツールは多機能ゆえに設定や運用が煩雑で、料金も高くてなかなか手が出せない。",
    Illustration: SmallBudget,
  },
];

const Problems = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-screen-lg w-full py-8 md:py-12 px-6 md:px-0">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-center leading-tight">
          EC業務でこんなお悩みはありませんか？
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 max-w-md sm:max-w-screen-md lg:max-w-screen-lg w-full mx-auto px-6">
          {problems.map((problem) => (
            <div key={problem.title} className="flex flex-col text-start">
              <div className="flex items-center justify-center mb-4 sm:mb-6 w-full p-5 max-h-[220px]">
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

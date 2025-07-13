const problems = [
  {
    title: "手作業の時間浪費",
    description:
      "毎日何時間もブラウザを開いて複数サイトを巡回し、掲載記事を探すだけで丸一日が終わってしまう…",
  },
  {
    title: "ネガティブ情報の見逃し",
    description: "重大な悪評やクレーム記事を後から発見し、炎上対応やリカバリーに追われる事態に。",
  },
  {
    title: "導入コストの壁",
    description:
      "高額な大手ツールは初期費用も月額も重く、予算の限られた中小広報では手が出しにくい。",
  },
];

const Problems = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="w-full">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">
          こんなことでお困りではありませんか？
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 max-w-md sm:max-w-screen-md lg:max-w-screen-lg w-full mx-auto px-6">
          {problems.map((problem) => (
            <div key={problem.title} className="flex flex-col text-start">
              <div className="mb-5 sm:mb-6 w-full aspect-[4/5] bg-muted rounded-xl" />
              <span className="text-2xl font-semibold tracking-tight">{problem.title}</span>
              <p className="mt-2 max-w-[25ch] text-muted-foreground text-[17px]">
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

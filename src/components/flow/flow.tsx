const steps = [
  {
    title: "キーワード登録",
    description:
      "自社ブランド、競合ブランド、注目テーマなど、モニタリングしたいキーワードを登録します",
  },
  {
    title: "自動クリッピング開始",
    description: "登録した翌日からWebメディアを24時間巡回し、掲載記事を自動で収集します",
  },
  {
    title: "成果確認＆分析",
    description:
      "ダッシュボードで日ごとの掲載数推移や掲載分類・ポジ/ネガ分析を行います。AIによる打ち手の提案も可能です",
  },
];

export default function Flow() {
  return (
    <div className="min-h-screen flex items-center justify-center py-8 md:py-12">
      <div className="max-w-screen-md mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center mb-16">
          3ステップで<br className="block sm:hidden" />かんたんスタート
        </h2>
        <div className="relative ml-6">
          {/* Timeline line */}
          <div className="absolute left-0 inset-y-0 border-l-2" />

          {steps.map(({ title, description }, index) => (
            <div key={title} className="relative pl-10 pb-10 last:pb-0">
              {/* Timeline Icon */}
              <div className="absolute left-px -translate-x-1/2 h-9 w-9 border-2 border-muted-foreground flex items-center justify-center rounded-full bg-accent ring-8 ring-background">
                <span className="font-semibold text-lg">{index + 1}</span>
              </div>

              {/* Content */}
              <div className="pt-1 space-y-2">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

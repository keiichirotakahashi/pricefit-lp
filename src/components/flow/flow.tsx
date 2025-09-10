const steps = [
  {
    title: "検索条件を登録",
    description: "商品名・JANコード・ASINなどを入力し、価格調査の条件を登録します。",
  },
  {
    title: "自動で価格を調査",
    description:
      "設定条件に基づき、主要モールの価格を自動で収集。最新の競合価格をリストにまとめます。",
  },
  {
    title: "自動で最適な価格に更新",
    description:
      "競合価格と自社ルールをもとに、自動で価格を更新。高すぎれば値下げ、安すぎれば値上げを行い、最適価格をキープします。",
  },
];

export default function Flow() {
  return (
    <div className="min-h-screen flex items-center justify-center py-8 md:py-12">
      <div className="max-w-screen-md mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center mb-16">
          ご利用ステップ
        </h2>
        <div className="relative ml-6">
          {/* Timeline line */}
          <div className="absolute left-0 inset-y-0 border-l-2" />

          {steps.map(({ title, description }, index) => (
            <div key={title} className="relative pl-10 pb-10 last:pb-0">
              {/* Timeline Icon */}
              <div className="absolute left-px -translate-x-1/2 h-9 w-9 border-2 border-[#C9C9E6] flex items-center justify-center rounded-full bg-accent ring-8 ring-background">
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

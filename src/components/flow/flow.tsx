const steps = [
  {
    title: "キーワード登録",
    description: "ブランド名や会社名などモニタリングしたいキーワードを登録します",
  },
  {
    title: "通知設定",
    description: "メールやSlackなどお好みの通知先を登録します",
  },
  {
    title: "モニタリング開始",
    description: "登録したキーワードを自動でモニタリングします",
  },
];

export default function Flow() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="max-w-screen-sm mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center mb-16">
          3ステップでかんたんスタート
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

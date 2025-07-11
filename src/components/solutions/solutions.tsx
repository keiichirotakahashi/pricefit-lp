import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    category: "リアルタイム通知",
    title: "即時のリアルタイム通知",
    details:
      "プレスリリース配信後、数分以内に掲載・言及を検出し、ブラウザやSlackに即お知らせ。複数サイトを手動で巡回する手間をゼロにし、重要な反響を逃しません。",
    tutorialLink: "#",
  },
  {
    category: "自動クリッピング",
    title: "自動クリッピングで記事を一元管理",
    details:
      "検知した記事は自動的に切り抜き・保存し、一覧画面でまとめて閲覧可能。記事URLや掲載日時、媒体名などのメタ情報も同時に記録されるので、後からの社内共有やレポート作成がスムーズです。",
    tutorialLink: "#",
  },
  {
    category: "感情分析",
    title: "ポジ／ネガ感情分析で優先順位を可視化",
    details:
      "AIが各記事のトーンをポジティブ／ネガティブに分類し、ダッシュボードで比率や注目記事をハイライト。ネガティブ報道や好評記事を即座に把握し、次の対応や社内報告に役立てられます。",
    tutorialLink: "#",
  },
];

const Solutions = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-screen-lg w-full py-10 px-6">
        <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight max-w-xl md:text-center md:mx-auto">
          ClipBaseがまるごと解決
        </h2>
        <div className="mt-8 md:mt-16 w-full mx-auto space-y-20">
          {solutions.map((solution) => (
            <div
              key={solution.category}
              className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse"
            >
              <div className="w-full aspect-[6/4] bg-muted rounded-xl border border-border/50 basis-1/2" />
              <div className="basis-1/2 shrink-0">
                <span className="uppercase font-semibold text-sm text-muted-foreground">
                  {solution.category}
                </span>
                <h4 className="my-3 text-3xl font-semibold tracking-tight">{solution.title}</h4>
                <p className="text-muted-foreground text-[17px]">{solution.details}</p>
                <Button asChild className="mt-6 rounded-full min-w-40 text-[15px]">
                  <Link href={solution.tutorialLink}>
                    詳しく見る <ArrowRight />
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

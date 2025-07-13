import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12">
        <div>
          <Badge className="bg-gradient-to-br via-70% from-primary via-muted/30 to-primary rounded-full py-1 border-none">
            β版提供中
          </Badge>
          <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2]">
            メディアモニタリングをスマートに
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg">
            ClipBaseは小規模な広報チームのためのメディアモニタリングツールです。リアルタイム通知&自動クリッピングで、反響も感情もすぐに見える化します。
          </p>
          <div className="mt-12 flex items-center gap-4">
            <Button size="lg" className="rounded-full text-base">
              無料トライアルに申し込む <ArrowUpRight className="!h-5 !w-5" />
            </Button>
          </div>
        </div>
        <div className="w-full aspect-video bg-accent rounded-xl" />
      </div>
    </div>
  );
};

export default Hero;

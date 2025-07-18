import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12">
        <div>
          <Badge className="bg-gradient-to-br via-70% from-primary via-muted/30 to-primary rounded-full py-1 border-none">
            ベータ版無料提供中！
          </Badge>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-[2.75rem]  font-bold !leading-[1.2]">
            広報・PR業務の効果測定を
            <br className="hidden sm:block" />
            「おトク」に「カンタン」に
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg">
            ClipBaseは、業界最安水準で利用できるWebクリッピングツールです。広報・PR業務の自動化や効果測定を、おトクに、カンタンに始められます。
          </p>
          <div className="mt-12 flex items-center gap-4">
            <Button size="lg" className="rounded-full text-base cursor-pointer" asChild>
              <Link href="#contact">
                無料ベータ版に申し込む <ArrowUpRight className="!h-5 !w-5" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="w-full aspect-video bg-accent rounded-xl" />
      </div>
    </div>
  );
};

export default Hero;

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-8 items-center px-6 py-12">
        <div>
          <Badge className="bg-accent text-primary rounded-full py-1 border-none">
            ベータ版無料提供中！
          </Badge>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-[2.75rem]  font-bold !leading-[1.2]">
            価格調査&更新の自動化を
            <br className="hidden sm:block" />
            「おトク」に「カンタン」に
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg">
            PriceFitは、業界最安水準で利用できるECモール用の価格調査自動化ツールです。最適な価格をキープして利益を最大化させましょう。
          </p>
          <div className="mt-12 flex items-center gap-4">
            <Button size="lg" className="rounded-full text-base cursor-pointer" asChild>
              <Link href="#contact">
                無料ベータ版に申し込む <ArrowUpRight className="!h-5 !w-5" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="w-full relative">
          <Image
            src="/pricefit-screen.png"
            alt="Hero"
            layout="responsive"
            width={2880}
            height={1622}
            className="border border-border/50 rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

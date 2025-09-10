import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "../ui/animated-grid-pattern";
import { Button } from "../ui/button";

export default function CTABanner() {
  return (
    <div className="px-6">
      <div className="relative overflow-hidden mt-16 md:mt-24 mb-40 w-full bg-gradient-to-br from-[#7246F8] to-primary text-primary-foreground max-w-screen-lg mx-auto rounded-2xl py-8 md:py-12 lg:py-16 px-6 md:px-14">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_right,white,rgba(255,255,255,0.6),transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_top_left,white,rgba(255,255,255,0.6),transparent)]",
            "inset-x-0 inset-y-0 h-[200%] skew-y-12"
          )}
        />
        <div className="relative z-0 flex flex-col gap-3">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
            先着20社限定！ベータ版は無料でお試しいただけます
          </h3>
          <p className="mt-2 text-base md:text-lg">
            PriceFitは現在、ベータ版の利用者を募集中です。先着20社限定で、ベータ版期間は「ずっと」無料でお試しいただけます。正式リリース後も、業界最安水準での提供を予定しております。
          </p>
        </div>
        <div className="relative z-0 mt-8 md:mt-12 flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="cursor-pointer bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            asChild
          >
            <Link href="#contact">
              無料ベータ版に申し込む <ArrowUpRight className="!h-5 !w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

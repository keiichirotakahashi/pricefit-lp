import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="grow bg-muted" />
      <footer className="bg-gradient-to-br from-[#7246F8] to-primary text-primary-foreground">
        <div className="max-w-screen-xl mx-auto">
          <div className="py-12 flex flex-col justify-start items-center">
            {/* Logo */}
            <div className="text-2xl font-bold tracking-tight text-primary-foreground">
              PriceFit
            </div>
          </div>
          <Separator />
          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-center gap-x-2 gap-y-5 px-6 xl:px-0">
            {/* Copyright */}
            <span className="text-primary-foreground/70">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/" target="_blank">
                PriceFit
              </Link>
              . All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

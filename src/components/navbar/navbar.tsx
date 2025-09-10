import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

const Navbar = () => {
  return (
    <nav className="fixed top-6 inset-x-4 h-16 bg-background border border-[#DADADA] max-w-screen-xl mx-auto rounded-full z-50">
      <div className="h-full flex items-center justify-between mx-auto px-6">
        <Logo />

        <div className="flex items-center gap-3">
          <Button className="rounded-full cursor-pointer">
            <Link href="#contact">お問い合わせ</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

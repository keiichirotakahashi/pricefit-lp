import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => (
  <div className="flex items-center justify-center py-8 md:py-16">
    <div className="w-full max-w-screen-xl mx-auto px-6 xl:px-0">
      <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-center">
        β版無料トライアル／お問い合わせ
      </h2>
      <p className="mt-3 text-base sm:text-lg text-center">
        ClipBaseについてご質問がございましたら、お気軽にお問い合わせください。
      </p>
      <div className="flex items-center justify-center mt-10">
        {/* Form */}
        <Card className="bg-accent shadow-none w-full max-w-2xl">
          <CardContent className="py-2 px-6 md:px-8">
            <form>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-5">
                <div className="col-span-2">
                  <Label htmlFor="companyName">企業名（必須）</Label>
                  <Input
                    placeholder="企業名"
                    id="companyName"
                    className="mt-1.5 bg-white h-11 shadow-none"
                    required
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <Label htmlFor="firstName">姓（必須）</Label>
                  <Input
                    placeholder="姓"
                    id="firstName"
                    className="mt-1.5 bg-white h-11 shadow-none"
                    required
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <Label htmlFor="lastName">名（必須）</Label>
                  <Input
                    placeholder="名"
                    id="lastName"
                    className="mt-1.5 bg-white h-11 shadow-none"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="email">メールアドレス（必須）</Label>
                  <Input
                    type="email"
                    placeholder="メールアドレス"
                    id="email"
                    className="mt-1.5 bg-white h-11 shadow-none"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="phone">電話番号</Label>
                  <Input
                    type="tel"
                    placeholder="電話番号"
                    id="phone"
                    className="mt-1.5 bg-white h-11 shadow-none"
                  />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="message">お問い合わせ内容</Label>
                  <Textarea
                    id="message"
                    placeholder="お問い合わせ内容をご記入ください"
                    className="mt-1.5 bg-white shadow-none"
                    rows={6}
                  />
                </div>
                <div className="col-span-2 flex items-center gap-2">
                  <Checkbox id="acceptTerms" />
                  <Label htmlFor="acceptTerms">
                    <Link href="#" className="underline">
                      利用規約
                    </Link>
                    に同意します
                  </Label>
                </div>
              </div>
              <Button className="mt-6 w-full" size="lg">
                送信
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
);

export default Contact;

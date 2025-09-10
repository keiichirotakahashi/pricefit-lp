"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div
      id="contact"
      className="min-h-screen flex items-center justify-center py-6 md:pt-20 md:pb-10"
    >
      <div className="w-full max-w-screen-xl mx-auto px-6 xl:px-0">
        <iframe
          name="hidden_iframe"
          id="hidden_iframe"
          title="Hidden iframe for form submission"
          className="hidden"
          onLoad={() => setIsSubmitted(true)}
        ></iframe>

        {!isSubmitted && (
          <>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center">
              お問い合わせ
            </h2>
            <p className="mt-3 text-base sm:text-lg text-muted-foreground text-center">
              PriceFitの無料ベータ版へのお申し込みは下記より受け付けております。ご質問もこちらから承ります。
            </p>
            <div className="flex items-center justify-center mt-4 md:mt-6">
              {/* Form */}
              <Card className="bg-accent shadow-none w-full max-w-2xl border border-[#C9C9E6]">
                <CardContent className="px-4 md:px-6">
                  <form
                    action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfKcj633lMdi_6jFX9hEObNajx6VbdqtEn1QtqDMpO19OPt1g/formResponse"
                    method="POST"
                    target="hidden_iframe"
                    onSubmit={() => setIsSubmitting(true)}
                  >
                    <div className="grid md:grid-cols-2 gap-x-6 gap-y-5">
                      <div className="col-span-2">
                        <Label htmlFor="companyName">企業名（必須）</Label>
                        <Input
                          placeholder="企業名"
                          id="companyName"
                          name="entry.787755629"
                          className="mt-1.5 bg-white h-11 shadow-none border border-[#C9C9E6]"
                          required
                        />
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <Label htmlFor="firstName">姓（必須）</Label>
                        <Input
                          placeholder="姓"
                          id="firstName"
                          name="entry.79100113"
                          className="mt-1.5 bg-white h-11 shadow-none border border-[#C9C9E6]"
                          required
                        />
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <Label htmlFor="lastName">名（必須）</Label>
                        <Input
                          placeholder="名"
                          id="lastName"
                          name="entry.138592366"
                          className="mt-1.5 bg-white h-11 shadow-none border border-[#C9C9E6]"
                          required
                        />
                      </div>
                      <div className="col-span-2">
                        <Label htmlFor="email">メールアドレス（必須）</Label>
                        <Input
                          type="email"
                          placeholder="メールアドレス"
                          id="email"
                          name="entry.427198006"
                          className="mt-1.5 bg-white h-11 shadow-none border border-[#C9C9E6]"
                          required
                        />
                      </div>
                      <div className="col-span-2">
                        <Label htmlFor="phone">ご連絡がつきやすい携帯番号（必須）</Label>
                        <Input
                          type="tel"
                          placeholder="電話番号"
                          id="phone"
                          name="entry.1644352446"
                          className="mt-1.5 bg-white h-11 shadow-none border border-[#C9C9E6]"
                          required
                        />
                      </div>
                      <div className="col-span-2">
                        <Label htmlFor="message">お問い合わせ内容</Label>
                        <Textarea
                          id="message"
                          name="entry.924463901"
                          placeholder="お問い合わせ内容をご記入ください"
                          className="mt-1.5 bg-white shadow-none border border-[#C9C9E6]"
                          rows={6}
                        />
                      </div>
                      <div className="col-span-2 flex items-center gap-2">
                        <p className="text-[0.8rem] text-muted-foreground">
                          「送信」を押すことで
                          <Link href="/privacy" target="_blank" className="underline text-primary">
                            プライバシーポリシー
                          </Link>
                          に同意するものとします。
                        </p>
                      </div>
                    </div>

                    <input type="hidden" name="entry.331312095" value="PriceFit" />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-6 w-full disabled:cursor-not-allowed cursor-pointer"
                      size="lg"
                    >
                      {isSubmitting ? "送信中..." : "送信"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </>
        )}

        {isSubmitted && (
          <div className="text-center">
            <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-center">
              お問い合わせありがとうございます
            </h2>
            <p className="mt-6 text-lg text-muted-foreground text-center">
              無料トライアルのご利用にあたり、30分程度のお打ち合わせを実施させていただけると幸いです。
              <br />
              以下よりご希望の日時をお知らせください。
            </p>
            <div className="mt-6">
              <iframe
                title="Google Calendar"
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ27BPyTMPxeKzWWX3QUJABPGy1VubWrv3TM2Aseb7vof6vel7jK20cImbPsXEpE8MjAJ4BDYn6-?gv=true"
                width="100%"
                height="600"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;

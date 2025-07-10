import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => (
  <div className="flex items-center justify-center py-16">
    <div className="w-full max-w-screen-xl mx-auto px-6 xl:px-0">
      <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-center">
        Chat to our friendly team
      </h2>
      <p className="mt-3 text-base sm:text-lg text-center">
        We&apos;d love to hear from you. Please fill out this form or shoot us an email.
      </p>
      <div className="flex items-center justify-center mt-10 gap-16 md:gap-10">
        {/* Form */}
        <Card className="bg-accent shadow-none">
          <CardContent className="p-6 md:p-10">
            <form>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-5">
                <div className="col-span-2">
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input
                    placeholder="Company Name"
                    id="companyName"
                    className="mt-1.5 bg-white h-11 shadow-none"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    placeholder="First name"
                    id="firstName"
                    className="mt-1.5 bg-white h-11 shadow-none"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    placeholder="Last name"
                    id="lastName"
                    className="mt-1.5 bg-white h-11 shadow-none"
                  />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    placeholder="Email"
                    id="email"
                    className="mt-1.5 bg-white h-11 shadow-none"
                  />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    type="phone"
                    placeholder="Phone"
                    id="phone"
                    className="mt-1.5 bg-white h-11 shadow-none"
                  />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Message"
                    className="mt-1.5 bg-white shadow-none"
                    rows={6}
                  />
                </div>
                <div className="col-span-2 flex items-center gap-2">
                  <Checkbox id="acceptTerms" />
                  <Label htmlFor="acceptTerms">
                    You agree to our{" "}
                    <Link href="#" className="underline">
                      terms and conditions
                    </Link>
                    .
                  </Label>
                </div>
              </div>
              <Button className="mt-6 w-full" size="lg">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
);

export default Contact;

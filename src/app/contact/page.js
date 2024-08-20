import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";
import phone from "../../assets/icons-phone.svg";
import mail from "../../assets/icons-mail.svg";
const ContactForm = () => {
  return (
    <div className="flex flex-col py-4 w-10/12 mx-auto gap-16 mt-6">
      <h1 className="text-stone-400">
        <Link href={"/"}>Home</Link>/<span className="text-black">Contact</span>
      </h1>
      <div className="flex gap-8 max-[770px]:flex-col">
        <Card className="w-1/3 p-6 max-[770px]:w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-4">
              <Image src={phone} alt="Phone call" />
              <p>Call To Us</p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </CardContent>
          <hr className="my-4" />
          <CardHeader>
            <CardTitle className="flex items-center gap-4">
              <Image src={mail} alt="mail" />
              <p>Write To Us</p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </CardContent>
        </Card>
        <Card className="w-2/3 p-6 max-[770px]:w-full">
          <form className="flex flex-col gap-6">
            <div className="flex gap-4">
              <Input placeholder="Your Name *" className="w-1/3" />
              <Input placeholder="Your Email *" className="w-1/3" />
              <Input placeholder="Your Phone *" className="w-1/3" />
            </div>
            <Textarea placeholder="Your Message" className="h-40" />
            <Button className="bg-red-600 text-white">Send Message</Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default ContactForm;

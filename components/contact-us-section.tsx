import { MailIcon } from "lucide-react";
import { CardStackDemo } from "./why-us-cards";

export function ContactUsSection() {
  return (
    <div className="flex mt-[5rem] justify-around items-center">
      <div className="w-1/2">
        <div className="text-5xl text-neutral-400 font-bold">Contact us</div>
        <br />
        <div className="text-neutral-300 text-lg">
          We are always looking for ways to improve our products and services.
          Contact us and let us know how we can help you.
        </div>
        <br />
        <div className="flex justify-center items-center gap-2">
          <MailIcon></MailIcon>
          <div className="text-neutral-300 text-lg"> info@easyanalysis.ai</div>
        </div>
      </div>
      <CardStackDemo></CardStackDemo>
    </div>
  );
}

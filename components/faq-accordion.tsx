import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const data = [
  {
    id: 0,
    name: "What types of data can I upload?",
    content:
      "You can upload .xls Excel files for analysis. We are actively working to add more file types and will soon be able to support a host of different files.",
  },
  {
    id: 1,
    name: "How quickly will I receive my report?",
    content:
      "Reports are typically generated within a few seconds to minutes, depending on the size and complexity of your data.",
  },
  {
    id: 3,
    name: "Can I analyse unstructured text data?",
    content:
      "Yes, our platform now fully supports the analysis of unstructured text data, providing meaningful semantic insights at scale.",
  },
  {
    id: 4,
    name: "Do I need any statistical knowledge to use the platform?",
    content:
      "No, our platform is designed specifically for non-technical users and requires no prior statistical knowledge.",
  },
  {
    id: 5,
    name: "Can I customise the reports for my unique use case?",
    content:
      "Yes, we offer fully customisable reports to fit your specific needs and data. Reach out to us at info@easyanalysis.ai for a quote.",
  },
  {
    id: 6,
    name: "Can I get a report with my company’s branding?",
    content:
      "Absolutely! We offer a full carte of branding options. Reach out to us at info@easyanalysis.ai for a quote.",
  },
  {
    id: 7,
    name: "How can I reach out to support?",
    content:
      "Reach out to us at info@easyanalysis.ai. We will get back to you as soon as possible.",
  },
];

export function AccordionDemo() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center mt-[10rem] px-[15%] w-full">
      <div className="w-full text-center h-full">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-white bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Frequently Asked Questions ?
          </h1>
        </div>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {data.map((item, index) => {
          return (
            <AccordionItem key={index} value={`"item-${index}"`}>
              <AccordionTrigger>{item.name}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}

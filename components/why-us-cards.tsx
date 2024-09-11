"use client";

import { cn } from "@/lib/utils";
import { CardStack } from "./ui/card-stack";

export function CardStackDemo() {
  return (
    <div className="h-[40rem] flex items-center justify-center w-fit">
      <CardStack items={CARDS} />
    </div>
  );
}

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold  bg-emerald-700/[0.2] text-emerald-500 px-1 py-0.5",
        className,
      )}
    >
      {children}
    </span>
  );
};

// Small utility to highlight the content of specific section of a testimonial content

const CARDS = [
  {
    id: 0,
    name: "What types of data can I upload?",
    content: (
      <p>
        You can upload <Highlight>.xls Excel</Highlight> files for analysis. We
        are actively working to add more file types and will soon be able to
        support a host of different files.
      </p>
    ),
  },
  {
    id: 1,
    name: "How quickly will I receive my report?",
    content: (
      <p>
        Reports are typically generated within{" "}
        <Highlight>a few seconds</Highlight> to minutes, depending on the size
        and complexity of your data.
      </p>
    ),
  },
  {
    id: 3,
    name: "Can I analyse unstructured text data?",
    content: (
      <p>
        Yes, our platform now fully supports the analysis of unstructured text
        data, providing <Highlight>meaningful semantic</Highlight> insights at
        scale.
      </p>
    ),
  },

  {
    id: 4,
    name: "Do I need any statistical knowledge to use the platform?",
    content: (
      <p>
        No, our platform is designed specifically for non-technical users and
        requires <Highlight>no prior </Highlight> statistical knowledge.
      </p>
    ),
  },
  {
    id: 5,
    name: "Can I customise the reports for my unique use case?",
    content: (
      <p>
        Yes, we offer fully customisable reports to fit your specific needs and
        data. Reach out to us at <Highlight>info@easyanalysis.ai</Highlight> for
        a quote.
      </p>
    ),
  },
  {
    id: 6,
    name: "Can I get a report with my company’s branding?",
    content: (
      <p>
        Absolutely! We offer a full carte of branding options. Reach out to us
        at <Highlight>info@easyanalysis.ai</Highlight> for a quote.
      </p>
    ),
  },

  {
    id: 7,
    name: "How can I reach out to support?",
    content: (
      <p>
        Reach out to us at <Highlight>info@easyanalysis.ai</Highlight> We will
        get back to you as soon as possible.
      </p>
    ),
  },
];

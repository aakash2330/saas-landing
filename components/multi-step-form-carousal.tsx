import * as React from "react";

import * as XLSX from "xlsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SelectGroupItem } from "./form-select";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { FileUploadDemo } from "./file-upload-carousel";
import { useState } from "react";
import { PlusCircle } from "lucide-react";
import { ProgressTimer } from "./timer";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { HeroEmail } from "./hero-email";
import { HeroTitle } from "./hero-title";

export function CarouselDemo({
  closeDialog,
  type,
}: {
  closeDialog: Function;
  type: "feedback" | "full";
}) {
  const [file, setFile] = useState<File>();
  const [columns, setColumns] = useState<any[]>([]);
  const [columnPairs, setColumnPairs] = useState<
    { value1: string | undefined; value2: string | undefined }[]
  >([]);
  const [progressTimerStart, setProgressTimerStart] = useState(false);
  const [feedback, setFeedback] = useState<any>(false);
  const [reportGenerated, setReportGenerated] = useState(false);
  const [generateReportTitle, setGenerateReportTitle] =
    useState("Generating Report");

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (reportGenerated) {
        setGenerateReportTitle("Your Report is ready");
        return clearInterval(interval);
      }
      setGenerateReportTitle((prev) => {
        const currentDots = prev.split(".").length - 1;
        if (currentDots <= 3) {
          return prev + ".";
        } else {
          return "Generating Report";
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [reportGenerated]);

  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
    const reader = new FileReader();
    reader.onload = (event) => {
      //@ts-expect-error - any
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const sheetColumns = XLSX.utils.sheet_to_json(sheet, { header: 1 })[0];
      //@ts-expect-error - any
      setColumns(sheetColumns || []);
      carousalNext();
    };
    reader.readAsArrayBuffer(e.target.files[0]);
  };

  const carouselConfigFeedback = [
    {
      title: "Give Feedback",
      content: (
        <div className="font-light h-full  text-sm">
          {!feedback ? (
            <div className="flex flex-col pb-5 gap-5 m-1">
              <div>
                <p className="text-neutral-200 text-lg">
                  We are Proud to serve you for{" "}
                  <b className="font-extrabold">FREE</b>
                </p>
                <p className="text-neutral-200 text-lg">
                  All we ask is that you leave some feedback
                </p>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label
                  className="text-neutral-300 font-light"
                  htmlFor="howmuch"
                >
                  1. How much should a company pay per year for our services?{" "}
                </Label>
                <div className="flex justify-start gap-2 items-center">
                  <Input
                    id={"howmuch"}
                    className="bg-zinc-900 border-[1px] w-[30%] font-light border-zinc-600"
                  />
                  <div>US dollars per year</div>
                </div>
              </div>
              <FeedbackInput
                width={50}
                question="2. What is your job title?"
              ></FeedbackInput>
              <FeedbackInput
                width={30}
                question="3. What country are you located in?"
              ></FeedbackInput>
              <FeedbackInput
                width={50}
                question="4. What is your work email? We promise not to spam you."
              ></FeedbackInput>
              <div className="font-light text-zinc-200">
                5. Let us know what you liked, didn't like and how we can
                improve.
                <Textarea className="bg-zinc-900 mt-1 border-[1px] font-light border-zinc-600 text-neutral-300 " />
              </div>
            </div>
          ) : (
            <div className="flex flex-col  h-full justify-center items-center">
              <div className="text-2xl font-bold text-neutral-200">
                Thank you sooo much!
              </div>
              <div className="text-light text-neutral-400">
                We really appreciate your feedback
              </div>
              <div className="text-light text-neutral-400">
                Do drop us a mail at <HeroEmail></HeroEmail> for any enquiries
                or custom reports
              </div>
            </div>
          )}
        </div>
      ),
      footer: (
        <>
          <CarouselButton
            onClick={() => {
              closeDialog();
            }}
          >
            Close
          </CarouselButton>

          {!feedback && (
            <CarouselButton
              variant="nice"
              onClick={() => {
                console.log("feedback submitted");
                setFeedback(true);
              }}
            >
              Submit Feedback
            </CarouselButton>
          )}
        </>
      ),
    },
  ];

  const carouselConfig = [
    {
      title: "Disclaimer",
      content: (
        <div className="font-light">
          By using EasyAnalysis (accessible at easyanalysis.ai), you acknowledge
          and agree to the following terms: Data Upload Risks: You understand
          that uploading files, including Excel documents, carries risks such as
          data breaches, unauthorized access, data loss, or leaks. You assume
          all risks associated with uploading and analyzing your data. No
          Guarantee of Security: While we implement reasonable security
          measures, we cannot guarantee complete protection against all
          potential threats. You should refrain from uploading sensitive or
          confidential information unless you are willing to accept the
          associated risks. Use of AI and Third-Party Services: Our services may
          use artificial intelligence and third-party APIs, including those from
          OpenAI. We do not control these services and are not responsible for
          their performance, availability, or any security vulnerabilities. Data
          Ownership and Responsibility: You retain ownership of your data. By
          uploading files to EasyAnalysis, you grant us a non-exclusive,
          worldwide, royalty-free license to process your data solely for the
          purpose of providing our analysis services. You are solely responsible
          for the legality of the data you upload. Limitation of Liability:
          EasyAnalysis, its founders, and affiliates shall not be liable for any
          direct, indirect, incidental, special, or consequential damages
          arising from your use of our services or your inability to access or
          use them, even if advised of the possibility of such damages.
          Amendments: We reserve the right to modify this disclaimer at any
          time. Your continued use of our services after any changes constitutes
          acceptance of the new terms. By using EasyAnalysis or any of our other
          sevices, you confirm that you have read, understood, and agree to this
          disclaimer.
        </div>
      ),
      footer: (
        <>
          <CarouselButton
            onClick={() => {
              closeDialog();
            }}
          >
            Cancel
          </CarouselButton>
          <div>
            <input
              min={1}
              max={1}
              type="file"
              id="fileInput"
              accept=".xlsx, .xls, .csv"
              hidden={true}
              onChange={handleFileChange}
            />
            <Button
              onClick={() => {
                document.getElementById("fileInput")?.click();
                carousalNext();
              }}
              style={{ cursor: "pointer" }}
              className="w-fit p-3 border rounded-[6px] border-neutral-800 bg-gradient-to-r from-[#1764FC] via-[#9F1BB5] to-[#F4771C] text-white transform transition-transform duration-200 hover:scale-105 active:scale-100"
              onMouseOver={() => {}}
            >
              Agree & Upload Excel File
            </Button>
          </div>
        </>
      ),
    },

    {
      title: "Upload File",
      content: (
        <>
          {!file && (
            <div className="h-full flex justify-center items-center">
              <FileUploadDemo
                carousalNext={carousalNext}
                setColumns={setColumns}
                setFile={setFile}
              ></FileUploadDemo>
            </div>
          )}
        </>
      ),
      footer: (
        <CarouselButton
          onClick={() => {
            carousalPrevious();
          }}
        >
          Back
        </CarouselButton>
      ),
    },
    {
      title: "Add Free Hypothesis Tests",
      content: (
        <div className="h-full">
          <div className="font-light h-full">
            <div>
              We can use specialised tests to compare 2 fields of data and
              determine if they're correlated, E.g. 'Age' might be correlated to
              'Wisdom'
            </div>
            <br />
            {file && (
              <div className="w-full flex justify-center items-center flex-col gap-3 overflow-y-auto">
                {columnPairs.map((column, index) => {
                  return (
                    <SelectGroupItem
                      columns={columns}
                      columnPairs={columnPairs}
                      setColumnPairs={setColumnPairs}
                      key={index}
                      indexValue={index}
                    ></SelectGroupItem>
                  );
                })}
                <div className="w-full mb-5  flex justify-start items-center">
                  <div
                    onClick={() => {
                      setColumnPairs((prev) => [
                        ...prev,
                        { value1: undefined, value2: undefined },
                      ]);
                    }}
                    className="bg-transparent hover:cursor-pointer flex justify-center items-center  gap-2 text-neutral-300 hover:bg-transparent"
                  >
                    <PlusCircle className="text-white"></PlusCircle>
                    <div className="underline font-semibold -translate-y-0.5">
                      Add Hypothesis test
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ),
      footer: (
        <>
          <CarouselButton
            onClick={() => {
              closeDialog();
            }}
          >
            Cancel
          </CarouselButton>

          <CarouselButton
            onClick={() => {
              setTimeout(() => {
                setReportGenerated(true);
              }, 10000);
              carousalNext();
            }}
            variant="nice"
          >
            Generate Report
          </CarouselButton>
        </>
      ),
    },

    {
      title: generateReportTitle,
      content: (
        <div className="font-light h-full  text-sm">
          {reportGenerated && (
            <div className="flex flex-col justify-center items-center">
              <Button className="bg-zinc-200 hover:-translate-y-1 transform transition duration-200 hover:shadow-md bg-gradient-to-r from-[#1764FC] via-[#9F1BB5] to-[#F4771C] text-white rounded-[6px] hover:bg-zinc-300">
                Open Report in a new Tab
              </Button>
              <p className="text-xs">Link will expire in 5 mins</p>
            </div>
          )}
          <br />
          {!feedback ? (
            <div className="flex flex-col pb-5 gap-5 m-1">
              <div>
                <p className="text-neutral-200 text-lg">
                  We are Proud to serve you for{" "}
                  <b className="font-extrabold">FREE</b>
                </p>
                <p className="text-neutral-200 text-lg">
                  All we ask is that you leave some feedback
                </p>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label
                  className="text-neutral-300 font-light"
                  htmlFor="howmuch"
                >
                  1. How much should a company pay per year for our services?{" "}
                </Label>
                <div className="flex justify-start gap-2 items-center">
                  <Input
                    id={"howmuch"}
                    className="bg-zinc-900 border-[1px] w-[30%] font-light border-zinc-600"
                  />
                  <div>US dollars per year</div>
                </div>
              </div>
              <FeedbackInput
                width={50}
                question="2. What is your job title?"
              ></FeedbackInput>
              <FeedbackInput
                width={30}
                question="3. What country are you located in?"
              ></FeedbackInput>
              <FeedbackInput
                width={50}
                question="4. What is your work email? We promise not to spam you."
              ></FeedbackInput>
              <div className="font-light text-zinc-200">
                5. Let us know what you liked, didn't like and how we can
                improve.
                <Textarea className="bg-zinc-900 mt-1 border-[1px] font-light border-zinc-600 text-neutral-300 " />
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center mt-20">
              <div className="text-2xl font-bold text-neutral-200">
                Thank you sooo much!
              </div>
              <div className="text-light text-neutral-400">
                We really appreciate your feedback
              </div>
              <div className="text-light text-neutral-400">
                Do drop us a mail at <HeroEmail></HeroEmail> for any enquiries
                or custom reports
              </div>
            </div>
          )}
        </div>
      ),
      footer: (
        <>
          <CarouselButton
            onClick={() => {
              closeDialog();
            }}
          >
            Close
          </CarouselButton>

          {!feedback && (
            <CarouselButton
              variant="nice"
              onClick={() => {
                console.log("feedback submitted");
                setFeedback(true);
              }}
            >
              Submit Feedback
            </CarouselButton>
          )}
        </>
      ),
    },
  ];

  function carousalNext() {
    document.getElementById("carousalNextButton")?.click();
  }

  function carousalPrevious() {
    document.getElementById("carousalPreviousButton")?.click();
  }

  return (
    <Carousel className="w-[40rem]">
      <CarouselContent>
        {(type == "feedback" ? carouselConfigFeedback : carouselConfig).map(
          (item, index) => (
            <CarouselItem
              className=" h-[30rem] w-full flex flex-col justify-between "
              key={index}
            >
              <div className="self-start">
                <HeroTitle
                  animation={false}
                  size="small"
                  title={item.title}
                ></HeroTitle>
              </div>
              <br />
              <div className="font-light my-5 -mt-1 border border-transparent border-b-white text-neutral-400 flex-1 py-3 overflow-y-auto">
                {item.content}
              </div>
              <div className="flex justify-end mr-1 mb-1 gap-5 items-center">
                {item.footer}
              </div>
            </CarouselItem>
          ),
        )}

        <CarouselNext id="carousalNextButton" hidden={true}></CarouselNext>
        <CarouselPrevious
          id="carousalPreviousButton"
          hidden={true}
        ></CarouselPrevious>
      </CarouselContent>
    </Carousel>
  );
}

function CarouselButton({
  children,
  onClick,
  variant,
}: {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  variant?: "nice" | "not nice";
}) {
  return (
    <Button
      onClick={onClick}
      className={`text-white z-[999] ${variant == "nice" ? "bg-gradient-to-r from-[#1764FC] via-[#9F1BB5] to-[#F4771C] text-white" : "text-white bg-transparent border-white"}  py-2 px-4 hover:bg-transparent rounded-[6px] transform transition-transform duration-200 hover:scale-105 active:scale-100`}
      variant={variant == "nice" ? "default" : "outline"}
    >
      {children}
    </Button>
  );
}
<button className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
  Simple
</button>;
function FeedbackInput({
  question,
  width = 100,
}: {
  question: string;
  width?: number;
}) {
  return (
    <div className={`flex flex-col space-y-1.5 `}>
      <Label className="text-neutral-300 font-light" htmlFor={question}>
        {question}
      </Label>
      <Input
        id={question}
        className={`bg-zinc-900 border-[1px] font-light w-[${width}%] border-zinc-600`}
      />
    </div>
  );
}

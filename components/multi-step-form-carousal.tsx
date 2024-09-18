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

export function CarouselDemo({ closeDialog }: { closeDialog: Function }) {
  const [file, setFile] = useState<File>();
  const [columns, setColumns] = useState<any[]>([]);
  const [columnPairs, setColumnPairs] = useState<
    { value1: string | undefined; value2: string | undefined }[]
  >([]);
  const [progressTimerStart, setProgressTimerStart] = useState(false);
  const [feedback, setFeedback] = useState<any>(false);

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

  console.log({ columnPairs });

  const carouselConfig = [
    {
      title: "Disclaimer",
      content: (
        <div className="font-light ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum
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
            <Label
              onClick={() => {
                carousalNext();
              }}
              htmlFor="fileInput"
              style={{ cursor: "pointer" }}
              className="w-fit p-3 border  border-neutral-800 bg-gradient-to-r from-[#1764FC] via-[#9F1BB5] to-[#F4771C] text-white "
            >
              Agree & Upload Excel File
            </Label>
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
      title: "Add optional Hypothesis tests for free",
      content: (
        <>
          <div className="font-light">
            <div>
              We can use specialised tests to compare 2 fields of data and
              determine if they're correlated, E.g. 'Age' might be correlated to
              'Wisdom'
            </div>
            <br />
            <div>Use the dropdowns below to select fields from your file </div>
            <br />
            {file && (
              <div className="w-full flex flex-col gap-3 overflow-y-auto">
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
                <div className="w-full flex justify-start items-center">
                  <div
                    onClick={() => {
                      setColumnPairs((prev) => [
                        ...prev,
                        { value1: undefined, value2: undefined },
                      ]);
                    }}
                    className="bg-transparent hover:cursor-pointer flex gap-2 text-neutral-300 hover:bg-transparent"
                  >
                    <PlusCircle className="text-white"></PlusCircle>
                    <div className="hover:underline">Add Hypothesis test</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
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
              setProgressTimerStart(true);
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
      title: "Please wait while your report is generated",
      content: (
        <div className="font-light h-full  text-sm">
          <ProgressTimer
            progressTimerStart={progressTimerStart}
          ></ProgressTimer>
          <br />
          {!feedback ? (
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-neutral-200">
                  We are Proud to serve you for{" "}
                  <b className="font-extrabold">FREE</b>
                </p>
                <p className="text-neutral-200">
                  All we ask is that you leave some feedback
                </p>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label
                  className="text-neutral-300 font-light"
                  htmlFor="howmuch"
                >
                  1. How much is the Product worth to you?
                </Label>
                <div className="flex justify-start gap-2 items-center">
                  <Input
                    id={"howmuch"}
                    className="bg-zinc-900 border-[1px] w-[30%] font-light border-zinc-600"
                  />
                  <div>US dollars per year</div>
                </div>
              </div>
              <FeedbackInput question="2. What is your job title?"></FeedbackInput>
              <FeedbackInput question="3. What country are you located in?"></FeedbackInput>
              <FeedbackInput question="4. What is your work email? We promise not to spam you."></FeedbackInput>
              <FeedbackInput question="5. Let us know what you liked, didn't like and how we can improve."></FeedbackInput>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center mt-20">
              <div className="text-2xl font-bold text-neutral-200">
                Thankyou sooo much !
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
            Cancel
          </CarouselButton>

          <CarouselButton
            variant="nice"
            onClick={() => {
              console.log("feedback submitted");
              setFeedback(true);
            }}
          >
            Submit Feedback
          </CarouselButton>
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
    <Carousel className="w-full max-w-lg">
      <CarouselContent>
        {carouselConfig.map((item, index) => (
          <CarouselItem
            className=" h-[30rem] py-3 flex flex-col justify-between "
            key={index}
          >
            <div className="self-start">
              <HeroTitle size="small" title={item.title}></HeroTitle>
            </div>
            <br />
            <div className="font-light text-neutral-400 flex-1 py-3 overflow-y-auto  no-scrollbar">
              {item.content}
            </div>
            <div className="flex justify-end gap-5 items-center">
              {item.footer}
            </div>
          </CarouselItem>
        ))}

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
      className={`w-fit p-2 border border-neutral-800 ${variant == "nice" ? "bg-gradient-to-r from-[#1764FC] via-[#9F1BB5] to-[#F4771C] text-white" : "bg-zinc-200"} hover:bg-zinc-200`}
    >
      {children}
    </Button>
  );
}

function FeedbackInput({ question }: { question: string }) {
  return (
    <div className="flex flex-col space-y-1.5">
      <Label className="text-neutral-300 font-light" htmlFor={question}>
        {question}
      </Label>
      <Input
        id={question}
        className="bg-zinc-900 border-[1px] font-light border-zinc-600"
      />
    </div>
  );
}

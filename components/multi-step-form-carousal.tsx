import * as React from "react";

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

export function CarouselDemo() {
  const [file, setFile] = useState<File>();
  const [columns, setColumns] = useState<any[]>([]);
  const [columnPairs, setColumnPairs] = useState<
    { value1: string | undefined; value2: string | undefined }[]
  >([]);
  const [progressTimerStart, setProgressTimerStart] = useState(false);

  console.log({ columnPairs });

  const carouselConfig = [
    {
      title: "Disclaimer",
      content: (
        <div className="font-light text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </div>
      ),
      cancelButton: true,
      nextButton: {
        visible: true,
        title: "Agree & continue to upload",

        action: () => {},
      },
      prevButton: false,
      finishButton: false,
    },

    {
      title: "Upload File",
      content: (
        <>
          {!file && (
            <FileUploadDemo
              setColumns={setColumns}
              setFile={setFile}
            ></FileUploadDemo>
          )}
          <div>
            {file && (
              <div className="w-full overflow-y-auto">
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

                <div className="w-full flex justify-center items-center">
                  <Button
                    onClick={() => {
                      setColumnPairs((prev) => [
                        ...prev,
                        { value1: undefined, value2: undefined },
                      ]);
                    }}
                    className="bg-transparent flex gap-2 text-neutral-300 hover:bg-transparent"
                  >
                    <div>Add Pair</div>
                    <PlusCircle className="text-white"></PlusCircle>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </>
      ),
      cancelButton: false,
      nextButton: {
        visible: true,

        action: () => {
          setProgressTimerStart(true);
        },
      },
      prevButton: true,
      finishButton: false,
    },

    {
      title: "Please wait while we generate your report .",
      content: (
        <div className="font-light text-sm">
          <ProgressTimer
            progressTimerStart={progressTimerStart}
          ></ProgressTimer>
          <div className="flex w-full gap-5  justify-center"></div>
          <br />
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-neutral-200">
                We are Proud to serve you for free
              </p>
              <p className="text-neutral-200">
                All we ask is that you leave some feedback
              </p>
            </div>
            <FeedbackInput question="How much is the Product worth to you ?"></FeedbackInput>
            <FeedbackInput question="What is your job title ?"></FeedbackInput>
            <FeedbackInput question="What is your job title ?"></FeedbackInput>
          </div>
        </div>
      ),
      cancelButton: false,
      nextButton: {
        visible: false,
        action: () => {},
      },
      prevButton: true,
      finishButton: true,
    },
  ];

  return (
    <Carousel className="w-full max-w-lg">
      <CarouselContent>
        {carouselConfig.map((item, index) => (
          <CarouselItem
            className=" h-[30rem] flex flex-col justify-between "
            key={index}
          >
            <div className="font-bold text-2xl text-neutral-300">
              {item.title}
            </div>
            <div className="font-light text-neutral-400">{item.content}</div>
            <div className="flex justify-between items-center">
              {item.cancelButton && (
                <CarouselButton title="Cancel"></CarouselButton>
              )}
              {item.prevButton && <CarouselPrevious />}
              {item.nextButton.visible && (
                <div
                  onClick={() => {
                    item.nextButton.action();
                  }}
                >
                  <CarouselNext title={item.nextButton.title ?? "Next"} />
                </div>
              )}

              {item.finishButton && (
                <CarouselButton title="Done"></CarouselButton>
              )}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

function CarouselButton({ title }: { title: string }) {
  return (
    <Button className="w-fit p-2 border border-neutral-800 bg-black text-white">
      {title}
    </Button>
  );
}

function FeedbackInput({ question }: { question: string }) {
  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor={question}>{question}</Label>
      <Input id={question} />
    </div>
  );
}

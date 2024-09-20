import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { MinusCircle, Trash2Icon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export function SelectGroupItem({
  columns,
  columnPairs,
  setColumnPairs,
  indexValue,
}: {
  columns: string[];
  columnPairs: any;
  setColumnPairs: any;
  indexValue: number;
}) {
  return (
    <div className="flex justify-between items-center gap-1">
      <div className="mr-2">{indexValue + 1}.</div>
      <div>
        <Select
          onValueChange={(value) => {
            console.log(value);
            setColumnPairs((prev: any) => {
              const updatedPairs = [...prev];
              updatedPairs[indexValue].value1 = value;
              return updatedPairs;
            });
          }}
        >
          <SelectTrigger className="w-[220px] bg-neutral-950 border-none">
            <SelectValue placeholder="Column 2" />
          </SelectTrigger>
          <SelectContent className="z-[999] bg-neutral-900">
            <SelectGroup className="">
              {columns.map((item, index) => {
                return (
                  columnPairs[indexValue].value2 !== item && (
                    <SelectItem key={index} value={item}>
                      {item}
                    </SelectItem>
                  )
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div>vs</div>
      <div>
        <Select
          onValueChange={(value) => {
            console.log(value);
            setColumnPairs((prev: any) => {
              const updatedPairs = [...prev];
              updatedPairs[indexValue].value2 = value;
              return updatedPairs;
            });
          }}
        >
          <SelectTrigger className="w-[220px] bg-neutral-950 border-none">
            <SelectValue placeholder="Column 2" />
          </SelectTrigger>
          <SelectContent className="z-[999] bg-neutral-900">
            <SelectGroup>
              {columns.map((item, index) => {
                return (
                  columnPairs[indexValue].value1 !== item && (
                    <SelectItem key={index} value={item}>
                      {item}
                    </SelectItem>
                  )
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      {indexValue == columnPairs.length - 1 ? (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              className="bg-transparent hover:cursor-pointer flex gap-2 p-0 text-neutral-300 hover:bg-transparent"
              onClick={() => {
                //@ts-expect-error - any
                setColumnPairs((prev) => {
                  const updatedPrev = [...prev];
                  updatedPrev.splice(prev.length - 1);
                  return updatedPrev;
                });
              }}
              asChild
            >
              <MinusCircle className="bg-neutral-900 size-6 text-white"></MinusCircle>
            </TooltipTrigger>
            <TooltipContent
              className="bg-neutral-600 -translate-x-14"
              side="bottom"
            >
              Remove Hypothesis Test
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : (
        <div className="min-h-6 min-w-6"></div>
      )}
    </div>
  );
}

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
import { Trash2Icon } from "lucide-react";

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
    <div className="flex justify-between items-center gap-3">
      <div>{indexValue + 1}</div>
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
          <SelectTrigger className="w-[180px] border-zinc-200">
            <SelectValue placeholder="Column 1" />
          </SelectTrigger>
          <SelectContent className="z-[999] bg-zinc-900 border-none">
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
          <SelectTrigger className="w-[180px] border-none">
            <SelectValue placeholder="Column 2" />
          </SelectTrigger>
          <SelectContent className="z-[999]">
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
      <Button
        className="bg-transparent flex gap-2 text-neutral-300 hover:bg-transparent"
        onClick={() => {
          //@ts-expect-error - any
          setColumnPairs((prev) => {
            const updatedPrev = [...prev];
            updatedPrev.splice(prev.length - 1);
            return updatedPrev;
          });
        }}
      >
        {indexValue == columnPairs.length - 1 ? (
          <Trash2Icon className="bg-neutral-900 size-6 text-white"></Trash2Icon>
        ) : (
          <div className="min-h-6 min-w-6"></div>
        )}
      </Button>
    </div>
  );
}

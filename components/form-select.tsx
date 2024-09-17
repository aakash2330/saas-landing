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
import { Trash, Trash2Icon, TrashIcon } from "lucide-react";

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
    <div className="flex justify-between items-center p-5">
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
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Column 1" />
          </SelectTrigger>
          <SelectContent className="z-[999]">
            <SelectGroup>
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
          <SelectTrigger className="w-[180px]">
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
          setColumnPairs((prev) => {
            const updatedPrev = [...prev];
            updatedPrev.splice(prev.length - 1);
            return updatedPrev;
          });
        }}
      >
        <Trash2Icon className="bg-neutral-900 text-white"></Trash2Icon>
      </Button>
    </div>
  );
}

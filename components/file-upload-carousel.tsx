"use client";
import React, { useState } from "react";
import * as XLSX from "xlsx";
import { FileUpload } from "@/components/ui/file-upload";

export function FileUploadDemo({
  carousalNext,
  setFile,
  setColumns,
}: {
  carousalNext: Function;
  setFile: any;
  setColumns: any;
}) {
  const handleFileUpload = (file: any) => {
    setFile(file[0]);
    const reader = new FileReader();
    reader.onload = (event) => {
      //@ts-expect-error - any
      const data = new Uint8Array(event.target!.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const sheetColumns = XLSX.utils.sheet_to_json(sheet, { header: 1 })[0];
      setColumns(sheetColumns || []);
      carousalNext();
    };
    reader.readAsArrayBuffer(file[0]);
  };

  return <FileUpload onChange={handleFileUpload} />;
}

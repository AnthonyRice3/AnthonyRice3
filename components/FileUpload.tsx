"use client";

import React from "react";
import { UploadItems } from "./ui/uploadItems"
import { InputForm } from "./InputForm";


export function FileUpload() {
  const handleUploadItems = (files: File[]) => {
    console.log(files);
  };

  return (
    <div className="w-full mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
      <InputForm />
      <UploadItems onChange={handleUploadItems} />
    </div>
  );
}

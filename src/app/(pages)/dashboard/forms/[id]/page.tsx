"use client";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { FormField } from "@/app/features/forms/types/FormField";
import { IframeFormMessageData } from "@/app/features/forms/types/IframeFormDataMessage";
import { Button } from "@/app/components/ui/button";
import React, { use, useEffect, useState } from "react";

type Props = {
  params: Promise<{ id: string }>;
};

const FormPage = ({ params }: Props) => {
  const [previewData, setPreviewData] = useState<FormField[]>();

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      console.log("message reçu", event.data);
      const data = event.data as IframeFormMessageData;
      if (data.type === "update") {
        setPreviewData(data.fields);
      }
    };
    console.log("component rendered ");
    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  console.log("previewData", previewData);

  return (
    <div className="">
      <form className="flex flex-col gap-2 max-w-xl mx-auto justify-center items-center">
        {previewData?.map((formField) => {
          if (formField.type === "input") {
            return (
              <>
                <Label>{formField.label ? formField.label : ""}</Label>
                <Input type="text"></Input>
              </>
            );
          }
          if (formField.type === "checkbox-group") {
            return (
              <>
                <Label>{formField.label ? formField.label : ""}</Label>
                <Input type="checkbox"></Input>
              </>
            );
          }
          if (formField.type === "radio-group") {
            return (
              <>
                <Label>{formField.label ? formField.label : ""}</Label>
                <Input type="radio"></Input>
              </>
            );
          } else return <></>;
        })}
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default FormPage;

"use client";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { FormField } from "@/app/features/forms/types/FormField";
import { IframeFormMessageData } from "@/app/features/forms/types/IframeFormDataMessage";
import { Button } from "@/app/components/ui/button";
import React, { use, useEffect, useState } from "react";
import { Checkbox } from "@/app/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radio-group";

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
    window.postMessage("OKAY", "http://localhost:3000");

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  console.log("previewData", previewData);

  return (
    <div className="">
      <form className="flex flex-col gap-2 max-w-xl mx-auto justify-center items-center">
        {previewData?.map((formField) => {
          let field: React.ReactNode | null = null;
          if (formField.type === "input") {
            field = (
              <>
                <Label>{formField.label ? formField.label : ""}</Label>
                <Input type="text"></Input>
              </>
            );
          }
          if (formField.type === "checkbox-group") {
            field = (
              <div className="flex items-center gap-3">
                <Checkbox></Checkbox>
                <Label>{formField.label ? formField.label : ""}</Label>
              </div>
            );
          }
          if (formField.type === "radio-group") {
            field = (
              <RadioGroup defaultValue="non">
                <Label>{formField.label ? formField.label : ""}</Label>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="oui" />
                  <Label>Oui</Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="non" />
                  <Label>Non</Label>
                </div>
              </RadioGroup>
            );
          }
          return <div key={formField.id}>{field}</div>;
        })}
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default FormPage;

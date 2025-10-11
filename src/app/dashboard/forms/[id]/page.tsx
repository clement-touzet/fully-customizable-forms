"use client";
import { IframeFormMessageData } from "@/app/features/forms/types/IframeFormDataMessage";
import React, { use, useEffect, useState } from "react";

type Props = {
  params: Promise<{ id: string }>;
};

const FormPage = ({ params }: Props) => {
  const { id } = use(params);
  const [previewData, setPreviewData] = useState<number>();

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const data = event.data as IframeFormMessageData;
      if (data.type === "update") {
        console.log("hello", data.myNumber);
        setPreviewData(data.myNumber);
      }
    };
    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div>
      id numéro {id}
      <br />
      Number from preview : {previewData}
      <form>
        <input placeholder="email"></input>
        <input placeholder="mot de passe"></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormPage;

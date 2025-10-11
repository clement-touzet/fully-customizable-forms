"use client";
import { IframeFormMessageData } from "@/app/features/forms/types/IframeFormDataMessage";
import React, { useRef } from "react";

const EditFormPage = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleClick = () => {
    const messageData: IframeFormMessageData = {
      type: "update",
      myNumber: 3,
    };
    iframeRef.current?.contentWindow?.postMessage(messageData, "*");
  };

  return (
    <div>
      <iframe
        ref={iframeRef}
        src={"http://localhost:3000/dashboard/forms/1234abcd"}
      ></iframe>
      <button onClick={handleClick}>Test communication iframe</button>
    </div>
  );
};

export default EditFormPage;

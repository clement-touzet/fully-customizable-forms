"use client";
import EditCustomFormTabs from "@/app/features/forms/components/edit/EditCustomFormTabs";
import { IframeFormMessageData } from "@/app/features/forms/types/IframeFormDataMessage";
import {
  FormFieldTableInsertType,
  FormFieldTableType,
  FormTableType,
} from "@/db/drizzle/schemas";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  customFormId: FormTableType["id"];
  initialFormFields: FormFieldTableType[];
};

const EditCustomFormPageContent = ({
  customFormId,
  initialFormFields,
}: Props) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [formFields, setFormFields] =
    useState<FormFieldTableInsertType[]>(initialFormFields);

  const iframeUtils = {
    removeEventListener: () =>
      iframeRef.current?.contentWindow?.removeEventListener(
        "message",
        loadedEventListener
      ),
    addEventListener: () =>
      iframeRef.current?.contentWindow?.addEventListener(
        "message",
        loadedEventListener
      ),
    postFormFieldsMessage: (data: IframeFormMessageData) => {
      iframeRef.current?.contentWindow?.postMessage(
        data,
        "http://localhost:3000"
      );
    },
  };

  const loadedEventListener = (message: any) => {
    const messageData: IframeFormMessageData = {
      type: "update",
      fields: formFields,
    };
    iframeUtils.postFormFieldsMessage(messageData);
    iframeUtils.removeEventListener();
  };

  useEffect(() => {
    const messageData: IframeFormMessageData = {
      type: "update",
      fields: formFields,
    };
    iframeUtils.postFormFieldsMessage(messageData);
  }, [formFields]);

  const onIframeLoad = () => {
    iframeUtils.addEventListener();
  };
  return (
    <>
      <EditCustomFormTabs formFields={formFields} />
      <div className="m-4">
        <iframe
          ref={iframeRef}
          src={`/dashboard/forms/${customFormId}`}
          className="h-full w-full border-2 border-blue-200 rounded-xl p-2"
          onLoad={onIframeLoad}
        />
      </div>
    </>
  );
};

export default EditCustomFormPageContent;

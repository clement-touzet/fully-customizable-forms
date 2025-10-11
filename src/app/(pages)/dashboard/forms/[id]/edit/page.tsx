"use client";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";
import FormFieldItem from "@/app/features/forms/components/edit/FormFieldItem";
import { FormField } from "@/app/features/forms/types/FormField";
import { Button } from "@/components/ui/button";
import { Eye, Plus } from "lucide-react";
import Link from "next/link";
import React, { use, useState } from "react";

const tabValues = {
  FIELDS: "fields",
  DATA_VALIDATION: "data-validation",
};

type Props = {
  params: Promise<{ id: string }>;
};

const EditFormPage = ({ params }: Props) => {
  const { id: formId } = use(params);
  // const iframeRef = useRef<HTMLIFrameElement>(null);
  const [formFields, setFormFields] = useState<FormField[]>([
    {
      type: "input",
      id: "1",
      label: "Email",
    },
    {
      type: "input",
      id: "2",
      label: "Mot de passe",
    },
    {
      type: "checkbox-group",
      id: "3",
      label: "Accepter les termes et les conditions",
    },
    {
      type: "radio-group",
      id: "4",
      label: "radio group",
    },
  ]);

  // const onRefreshPreview = () => {
  //   const messageData: IframeFormMessageData = {
  //     type: "update",
  //     fields: formFields,
  //   };
  //   console.log(
  //     "refresh preview",
  //     iframeRef.current?.contentWindow,
  //     messageData
  //   );
  //   // console.log("iframeRef", iframeRef, "message", messageData);
  //   iframeRef.current?.contentWindow?.postMessage(
  //     messageData,
  //     "http://localhost:3000"
  //   );
  // };

  return (
    <div>
      <div className="p-4 bg-neutral-200 flex justify-end">
        {/* <PreviewButtonDialog
          ref={iframeRef}
          onRefreshPreview={onRefreshPreview}
        /> */}
        <Button asChild>
          <Link
            href={`http://localhost:3000/dashboard/forms/${formId}`}
            target="_blank"
          >
            <Eye />
            Voir l'aperçu
          </Link>
        </Button>
      </div>

      <Tabs defaultValue={tabValues.FIELDS} className="py-8 max-w-xl mx-auto">
        <div className="flex justify-center">
          <TabsList className="">
            <TabsTrigger value={tabValues.FIELDS}>Champs</TabsTrigger>
            <TabsTrigger value={tabValues.DATA_VALIDATION}>
              Validation des données
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value={tabValues.FIELDS}>
          <p className="text-muted-foreground pb-2">Elements du formulaire</p>
          <div className="pb-4 flex flex-col gap-2">
            {formFields.map((formField, index) => {
              return (
                <FormFieldItem
                  key={formField.id}
                  formField={formField}
                  index={index}
                />
              );
            })}
          </div>
          <Button>
            <Plus />
            Nouveau champ
          </Button>
        </TabsContent>
        <TabsContent value={tabValues.DATA_VALIDATION}></TabsContent>
      </Tabs>
    </div>
  );
};

export default EditFormPage;

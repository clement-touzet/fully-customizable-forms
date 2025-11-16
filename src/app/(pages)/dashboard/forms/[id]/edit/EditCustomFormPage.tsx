"use client";

import { Button } from "@/app/components/ui/button";
import EditCustomFormPageContent from "@/app/features/forms/components/edit/EditCustomFormPageContent";
import { FormFieldTableType, FormTableType } from "@/db/drizzle/schemas";
import React from "react";

type Props = {
  formFields: FormFieldTableType[];
  customFormId: FormTableType["id"];
};

const EditCustomFormPage = ({ formFields, customFormId }: Props) => {
  const handleClickSave = () => {};

  return (
    <div>
      <div className="p-4 bg-neutral-200 flex justify-end">
        <Button onClick={handleClickSave}>Save</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <EditCustomFormPageContent
          customFormId={customFormId}
          initialFormFields={formFields}
        />
      </div>
    </div>
  );
};

export default EditCustomFormPage;

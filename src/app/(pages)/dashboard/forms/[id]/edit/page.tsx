"use server";

import EditCustomFormPage from "@/app/(pages)/dashboard/forms/[id]/edit/EditCustomFormPage";
import getFormFields from "@/app/features/forms/actions/getFormFields";
import React from "react";
type Props = {
  params: Promise<{ id: string }>;
};

const EditFormPage = async ({ params }: Props) => {
  const { id: customFormId } = await params;
  const formFields = await getFormFields({ customFormId });

  return (
    <EditCustomFormPage formFields={formFields} customFormId={customFormId} />
  );
};

export default EditFormPage;

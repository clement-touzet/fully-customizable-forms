"use client";
import getFormFields from "@/app/features/forms/actions/getFormFields";
import { FormFieldTableType } from "@/db/drizzle/schemas";
import { queryOptions } from "@tanstack/react-query";

const getFormFieldOptions = ({
  customFormId,
}: {
  customFormId: FormFieldTableType["customFormId"];
}) => {
  return queryOptions({
    queryKey: ["formFields", customFormId],
    queryFn: () => getFormFields({ customFormId }),
  });
};

export default getFormFieldOptions;

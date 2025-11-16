"use server";
import { db } from "@/db/drizzle/db";
import { FormFieldTable, FormFieldTableType } from "@/db/drizzle/schemas";
import { eq } from "drizzle-orm";

const getFormFields = async ({
  customFormId,
}: {
  customFormId: FormFieldTableType["customFormId"];
}): Promise<FormFieldTableType[]> => {
  const formFields = await db.query.FormFieldTable.findMany({
    where: eq(FormFieldTable.customFormId, customFormId),
  });
  return formFields;
};

export default getFormFields;

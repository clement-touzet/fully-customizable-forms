"use server";

import { formsPath } from "@/app/constants/paths";
import createFormFormOptions from "@/app/features/forms/constants/createFormFormOptions";
import { db } from "@/db/drizzle/db";
import {
  formTable,
  formTableInsertSchema,
  FormTableInsertType,
} from "@/db/drizzle/schemas/forms/formTable";
import {
  createServerValidate,
  ServerValidateError,
} from "@tanstack/react-form/nextjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const serverValidate = createServerValidate({
  ...createFormFormOptions,
  onServerValidate: formTableInsertSchema,
});

const createFormAction = async (prev: unknown, formData: FormData) => {
  console.log("action", formData);
  try {
    const validatedData = await serverValidate(formData);
    await db.insert(formTable).values(validatedData);
    revalidatePath(formsPath);
    return { success: true };
  } catch (error) {
    if (error instanceof ServerValidateError) {
      return { success: false, formState: error.formState };
    }
    throw error;
  }
};

export default createFormAction;

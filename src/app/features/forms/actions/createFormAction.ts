"use server";

import { formsPath } from "@/app/constants/paths";
import createFormFormOptions from "@/app/features/forms/constants/createFormFormOptions";
import { db } from "@/db/drizzle/db";
import {
  FormTable,
  formTableInsertSchema,
} from "@/db/drizzle/schemas/forms/FormTable";
import { revalidatePath } from "next/cache";
import {
  ServerValidateError,
  createServerValidate,
} from "@tanstack/react-form-nextjs";

const serverValidate = createServerValidate({
  ...createFormFormOptions,
  onServerValidate: formTableInsertSchema,
});

const createFormAction = async (prev: unknown, formData: FormData) => {
  console.log("action", formData);
  try {
    const validatedData = await serverValidate(formData);
    await db.insert(FormTable).values(validatedData);
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

"use server";

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

const serverValidate = createServerValidate({
  ...createFormFormOptions,
  onServerValidate: formTableInsertSchema,
});

const createFormAction = async (prev: unknown, formData: FormData) => {
  console.log("action", formData);
  try {
    const validatedData = await serverValidate(formData);
    db.insert(formTable).values(validatedData);
  } catch (error) {
    if (error instanceof ServerValidateError) {
      return error.formState;
    }
    throw error;
  }
};

export default createFormAction;

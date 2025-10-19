"use server";

import { formsPath } from "@/app/constants/paths";
import { db } from "@/db/drizzle/db";
import { formTable, FormTableSelectType } from "@/db/drizzle/schemas";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

const deleteFormAction = async (formIdToDelete: FormTableSelectType["id"]) => {
  await db.delete(formTable).where(eq(formTable.id, formIdToDelete));
  revalidatePath(formsPath);
};

export default deleteFormAction;

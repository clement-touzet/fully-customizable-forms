"use server";

import { formsPath } from "@/app/constants/paths";
import { db } from "@/db/drizzle/db";
import { FormTable, FormTableType } from "@/db/drizzle/schemas";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

const deleteFormAction = async (formIdToDelete: FormTableType["id"]) => {
  await db.delete(FormTable).where(eq(FormTable.id, formIdToDelete));
  revalidatePath(formsPath);
};

export default deleteFormAction;

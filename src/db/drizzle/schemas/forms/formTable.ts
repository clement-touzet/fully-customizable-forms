import { FORM_NAME_FIELD_NAME } from "@/app/features/forms/constants/formFieldNames";
import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import z from "zod";

export const FormTable = pgTable("form_table", {
  id: uuid("id").primaryKey().defaultRandom(),
  [FORM_NAME_FIELD_NAME]: varchar({ length: 255 }).notNull(),
});

export const formTableSelectSchema = createSelectSchema(FormTable);
export const formTableInsertSchema = createInsertSchema(FormTable).extend({
  [FORM_NAME_FIELD_NAME]: z
    .string()
    .min(1, "Vous devez donner un nom à votre formulaire.")
    .max(255, "Le nom de votre formulaire est trop long."),
});

export type FormTableType = z.infer<typeof formTableSelectSchema>;
export type FormTableInsertType = z.infer<typeof formTableInsertSchema>;

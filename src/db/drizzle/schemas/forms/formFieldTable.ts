import { FormFieldTypePgEnum } from "@/db/drizzle/schemas/enums";
import { FormTable } from "@/db/drizzle/schemas/forms/FormTable";
import { relations } from "drizzle-orm";
import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import z from "zod";

export const FormFieldTable = pgTable("form_field", {
  id: uuid("id").primaryKey().defaultRandom(),
  type: FormFieldTypePgEnum().notNull(),
  label: varchar({ length: 255 }),
  placeholder: varchar({ length: 1000 }),
  customFormId: uuid("id")
    .notNull()
    .references(() => FormTable.id),
});

export const FormFieldTableRelations = relations(FormFieldTable, ({ one }) => ({
  customForm: one(FormTable, {
    fields: [FormFieldTable.customFormId],
    references: [FormTable.id],
  }),
}));

export const FormFieldTableSchema = createSelectSchema(FormFieldTable);
export type FormFieldTableType = z.infer<typeof FormFieldTableSchema>;
export const FormFieldTableInsertSchema = createInsertSchema(FormFieldTable);
export type FormFieldTableInsertType = z.infer<
  typeof FormFieldTableInsertSchema
>;

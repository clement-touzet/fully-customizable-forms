import { FormFieldTypePgEnum } from "@/db/drizzle/schemas/enums";
import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const FormFieldTable = pgTable("form_field", {
  id: uuid("id").primaryKey().defaultRandom(),
  type: FormFieldTypePgEnum().notNull(),
  label: varchar({ length: 255 }),
  placeholder: varchar({ length: 1000 }),
});

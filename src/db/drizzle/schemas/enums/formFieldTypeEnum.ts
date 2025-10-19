import { enumToPgEnum } from "@/db/drizzle/util/enumToPgEnum";
import { pgEnum } from "drizzle-orm/pg-core";
import { createSelectSchema } from "drizzle-zod";

export enum FormFieldTypeEnum {
  INPUT = "input",
  RADIO_GROUP = "radio-group",
  CHECKBOX = "checkbox",
}

export const FormFieldTypePgEnum = pgEnum(
  "form_field_type_enum",
  enumToPgEnum(FormFieldTypeEnum)
);

export const CaracteristicsTypesSchema =
  createSelectSchema(FormFieldTypePgEnum);

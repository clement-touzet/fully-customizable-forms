import { FormFieldTableInsertType } from "@/db/drizzle/schemas";

export type IframeFormMessageData = {
  type: "update";
  fields: FormFieldTableInsertType[];
};

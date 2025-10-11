import { FormField } from "@/app/features/forms/types/FormField";

export type IframeFormMessageData = {
  type: "update";
  fields: FormField[];
};

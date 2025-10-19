import {
  DEFAULT_FORM_NAME_VALUE,
  FORM_NAME_FIELD_NAME,
} from "@/app/features/forms/constants/formFieldNames";
import {
  FormTableInsertType,
  FormTableSelectType,
} from "@/db/drizzle/schemas/forms/formTable";
import { formOptions } from "@tanstack/react-form/nextjs";

export const defaultFormFormOptionsValues: FormTableInsertType = {
  [FORM_NAME_FIELD_NAME]: DEFAULT_FORM_NAME_VALUE,
};

const createFormFormOptions = formOptions({
  defaultValues: defaultFormFormOptionsValues,
});
export default createFormFormOptions;

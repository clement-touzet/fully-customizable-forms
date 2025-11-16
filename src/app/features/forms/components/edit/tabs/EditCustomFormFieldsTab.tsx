import { TabsContent } from "@/app/components/ui/tabs";
import AddCustomizableFormDialog from "@/app/features/forms/components/edit/AddCustomizableFormDialog";
import FormFieldItem from "@/app/features/forms/components/edit/FormFieldItem";
import editCustomFormTabValuesEnum from "@/app/features/forms/constants/editCustomFormTabValuesEnum";
import { FormFieldTableInsertType } from "@/db/drizzle/schemas";
import React from "react";

type Props = {
  tabValue: editCustomFormTabValuesEnum;
  formFields: FormFieldTableInsertType[];
};

const EditCustomFormFieldsTab = ({ tabValue, formFields }: Props) => {
  return (
    <TabsContent value={tabValue}>
      <p className="text-muted-foreground pb-2">Elements du formulaire</p>
      <div className="pb-4 flex flex-col gap-2">
        {formFields.map((formField, index) => {
          return (
            <FormFieldItem
              key={formField.id}
              formField={formField}
              index={index}
            />
          );
        })}
      </div>
      <AddCustomizableFormDialog />
    </TabsContent>
  );
};

export default EditCustomFormFieldsTab;

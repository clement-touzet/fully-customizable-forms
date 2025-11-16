"use client";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";
import EditCustomFormFieldsTab from "@/app/features/forms/components/edit/tabs/EditCustomFormFieldsTab";
import editCustomFormTabValuesEnum from "@/app/features/forms/constants/editCustomFormTabValuesEnum";
import { FormFieldTableInsertType } from "@/db/drizzle/schemas";
import React from "react";

type Props = { formFields: FormFieldTableInsertType[] };

const EditCustomFormTabs = ({ formFields }: Props) => {
  return (
    <Tabs
      defaultValue={editCustomFormTabValuesEnum.Fields}
      className="py-8 max-w-xl mx-auto"
    >
      <div className="flex justify-center">
        <TabsList className="">
          <TabsTrigger value={editCustomFormTabValuesEnum.Fields}>
            Champs
          </TabsTrigger>
          <TabsTrigger value={editCustomFormTabValuesEnum.DataValidation}>
            Validation des données
          </TabsTrigger>
        </TabsList>
      </div>
      <EditCustomFormFieldsTab
        tabValue={editCustomFormTabValuesEnum.Fields}
        formFields={formFields}
      />
      <TabsContent
        value={editCustomFormTabValuesEnum.DataValidation}
      ></TabsContent>
    </Tabs>
  );
};

export default EditCustomFormTabs;

import DataTable from "@/app/features/forms/components/DataTable";
import { formsColumns } from "@/app/features/forms/constants/columns";
import { Button } from "@/app/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";
import NewFormButtonDialog from "@/app/features/forms/components/NewFormButtonDialog";

export type DataType = {
  id: string;
  name: string;
};

const data: DataType[] = [
  {
    id: "1",
    name: "Mon formulaire",
  },
  {
    id: "2",
    name: "Lead aquisition",
  },
  {
    id: "3",
    name: "Questionnaire satisfaction",
  },
  {
    id: "4",
    name: "Formulaire de test",
  },
];

const FormsPage = () => {
  return (
    <div className="container px-8 md:mx-auto py-10 flex flex-col gap-4">
      <div className="flex justify-end">
        <NewFormButtonDialog />
      </div>
      <DataTable columns={formsColumns} data={data} />
    </div>
  );
};

export default FormsPage;

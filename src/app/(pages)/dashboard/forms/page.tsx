import DataTable from "@/app/features/forms/components/DataTable";
import { formsColumns } from "@/app/features/forms/constants/formColumns";
import React from "react";
import NewFormButtonDialog from "@/app/features/forms/components/NewFormButtonDialog";
import { db } from "@/db/drizzle/db";

const FormsPage = async () => {
  const forms = await db.query.formTable.findMany();

  return (
    <div className="container px-8 md:mx-auto py-10 flex flex-col gap-4">
      <div className="flex justify-end">
        <NewFormButtonDialog />
      </div>
      <DataTable columns={formsColumns} data={forms} />
    </div>
  );
};

export default FormsPage;

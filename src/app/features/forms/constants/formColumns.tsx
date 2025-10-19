"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { Button } from "@/app/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Eye, MoreHorizontal, Trash2 } from "lucide-react";
import Link from "next/link";
import deleteFormAction from "@/app/features/forms/actions/deleteFormAction";
import { MouseEvent } from "react";
import { FormTableSelectType } from "@/db/drizzle/schemas";

export const formsColumns: ColumnDef<FormTableSelectType>[] = [
  {
    accessorKey: "name",
    header: "Nom",
  },
  {
    id: "action",
    cell: ({ row }) => {
      const currentForm = row.original;

      const handleDeleteClick = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        deleteFormAction(currentForm.id);
      };
      return (
        <div className="flex justify-end w-full">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href={`/dashboard/forms/${row.id}`} target="_blank">
                  <Eye />
                  Voir
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={`/dashboard/forms/${row.id}/edit`} target="_blank">
                  <Edit />
                  Modifier
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                variant="destructive"
                onClick={handleDeleteClick}
              >
                <Trash2 />
                Supprimer
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];

"use client";
import { DataType } from "@/app/(pages)/dashboard/forms/page";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import {
  Delete,
  Edit,
  Eye,
  MoreHorizontal,
  PencilLineIcon,
  Trash,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export const formsColumns: ColumnDef<DataType>[] = [
  {
    accessorKey: "name",
    header: "Nom",
  },
  {
    id: "action",
    cell: ({ row }) => {
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
              <DropdownMenuItem variant="destructive">
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

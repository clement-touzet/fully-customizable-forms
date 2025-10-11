import { Item } from "@/app/components/ui/item";
import { FormField } from "@/app/features/forms/types/FormField";
import {
  Check,
  CheckSquare,
  CircleDot,
  GripVertical,
  Square,
  TextCursorInput,
} from "lucide-react";
import React from "react";
import { useSortable } from "@dnd-kit/react/sortable";

type Props = {
  formField: FormField;
  index: number;
};

const FormFieldItem = ({ formField, index }: Props) => {
  const { ref } = useSortable({
    id: `form-field-item-${formField.id}`,
    index,
    type: "item",
    accept: "item",
  });

  return (
    <Item
      variant="outline"
      className="hover:cursor-pointer select-none bg-background"
      ref={ref}
      color=""
    >
      <GripVertical size={16} opacity={0.6} className="hover:cursor-grab" />
      {formField.type === "input" ? <TextCursorInput /> : null}
      {formField.type === "checkbox-group" ? <CheckSquare /> : null}
      {formField.type === "radio-group" ? <CircleDot /> : null}

      <p>{formField.label}</p>
    </Item>
  );
};

export default FormFieldItem;

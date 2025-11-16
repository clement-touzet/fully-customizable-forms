import { Item } from "@/app/components/ui/item";
import {
  Check,
  CheckSquare,
  CircleDot,
  GripVertical,
  LucideIcon,
  Square,
  TextCursorInput,
} from "lucide-react";
import React from "react";
import { useSortable } from "@dnd-kit/react/sortable";
import {
  FormFieldTableInsertType,
  FormFieldTypeEnum,
} from "@/db/drizzle/schemas";

type Props = {
  formField: FormFieldTableInsertType;
  index: number;
};

const fieldConfig: Record<
  FormFieldTypeEnum,
  {
    icon: LucideIcon;
  }
> = {
  [FormFieldTypeEnum.Input]: { icon: TextCursorInput },
  [FormFieldTypeEnum.Checkbox]: { icon: CheckSquare },
  [FormFieldTypeEnum.RadioGroup]: { icon: CircleDot },
};

const FormFieldItem = ({ formField, index }: Props) => {
  const { ref } = useSortable({
    id: `form-field-item-${formField.id}`,
    index,
    type: "item",
    accept: "item",
  });

  const Icon = fieldConfig[formField.type].icon;

  return (
    <Item
      variant="outline"
      className="hover:cursor-pointer select-none bg-background"
      ref={ref}
      color=""
    >
      <GripVertical size={16} opacity={0.6} className="hover:cursor-grab" />
      {<Icon />}
      <p>{formField.label}</p>
    </Item>
  );
};

export default FormFieldItem;

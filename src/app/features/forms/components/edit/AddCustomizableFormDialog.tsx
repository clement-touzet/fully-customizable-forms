import { Button } from "@/app/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { useForm } from "@tanstack/react-form";
import { Plus } from "lucide-react";
import React, { useState } from "react";

type Props = {};

const AddCustomizableFormDialog = (props: Props) => {
  const [open, setOpen] = useState(false);

  const form = useForm({});

  const handleClickNewField = () => {
    setOpen(() => true);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={handleClickNewField}>
          <Plus />
          Nouveau champ
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nouveau champ personnalisable</DialogTitle>
          <DialogDescription>
            Veuillez renseigner les champs si dessous pour ajouter un nouveau
            champ qui sera affiché dans le formulaire
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={() => form.handleSubmit()}>
          <DialogFooter>
            <Button>Valider</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddCustomizableFormDialog;

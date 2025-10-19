"use client";
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
import { Input } from "@/app/components/ui/input";
import createFormAction from "@/app/features/forms/actions/createFormAction";
import { FORM_NAME_FIELD_NAME } from "@/app/features/forms/constants/formFieldNames";
import { initialFormState } from "@tanstack/react-form/nextjs";
import { Plus } from "lucide-react";
import React, { useActionState, useEffect, useState } from "react";
import {
  mergeForm,
  useForm,
  useStore,
  useTransform,
} from "@tanstack/react-form";
import createFormFormOptions, {
  defaultFormFormOptionsValues,
} from "@/app/features/forms/constants/createFormFormOptions";
import { formTableInsertSchema } from "@/db/drizzle/schemas/forms/formTable";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/app/components/ui/field";

type Props = {};
const NewFormButtonDialog = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [actionState, createAction, isLoading] = useActionState(
    createFormAction,
    {
      formState: {
        ...initialFormState,
        values: defaultFormFormOptionsValues,
      },
      success: false,
    }
  );

  const {
    handleSubmit,
    Field: FormField,
    Subscribe,
    reset,
    store,
  } = useForm({
    ...createFormFormOptions,
    transform: useTransform(
      (baseForm) => mergeForm(baseForm, actionState.formState!),
      [actionState]
    ),
    validators: {
      onSubmit: formTableInsertSchema,
    },
    onSubmit: async ({ value }) => {
      console.log("on submit", value);
    },
  });

  useEffect(() => {
    if (!actionState) return;
    console.log("action state", actionState);
    if (actionState.success) {
      setOpen(() => false);
      reset();
    }
  }, [actionState]);

  const handleCancelClick = () => {
    setOpen(() => false);
    reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus />
          Nouveau
        </Button>
      </DialogTrigger>
      <DialogContent>
        <form action={createAction} onSubmit={() => handleSubmit()}>
          <FieldGroup>
            <DialogHeader>
              <DialogTitle>Nouveau formulaire</DialogTitle>
              <DialogDescription>
                Création d'un formulaire personnalisé
              </DialogDescription>
            </DialogHeader>
            <FieldSet>
              <FieldGroup>
                <FormField
                  name={FORM_NAME_FIELD_NAME}
                  children={(field) => {
                    const errorMessage = field.state.meta.errors?.[0]?.message;
                    return (
                      <Field>
                        <FieldLabel htmlFor={field.name}>
                          Nom du formulaire
                        </FieldLabel>
                        <Input
                          type="text"
                          id={field.name}
                          name={field.name}
                          placeholder="Nom"
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          onBlur={field.handleBlur}
                          aria-invalid={!!errorMessage}
                        />
                        {errorMessage ? (
                          <FieldError>{errorMessage}</FieldError>
                        ) : null}
                      </Field>
                    );
                  }}
                ></FormField>
              </FieldGroup>
            </FieldSet>
            <DialogFooter>
              <Subscribe
                selector={(state) => [state.canSubmit, state.isSubmitting]}
                children={([canSubmit, isSubmitting]) => {
                  const disableValidate = !canSubmit || isLoading;
                  return (
                    <Field orientation="responsive">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleCancelClick}
                      >
                        Annuler
                      </Button>
                      <Button type="submit" disabled={!canSubmit}>
                        {isSubmitting ? "..." : "Valider"}
                      </Button>
                    </Field>
                  );
                }}
              ></Subscribe>
            </DialogFooter>
          </FieldGroup>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewFormButtonDialog;

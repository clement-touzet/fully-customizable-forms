import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { Button } from "@/app/components/ui/button";
import { Eye } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  onRefreshPreview: () => void;
  ref: React.RefObject<HTMLIFrameElement | null>;
};

const PreviewButtonDialog = ({ onRefreshPreview, ref }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">
          <Eye />
          Voir l'aperçu
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Aperçu du formulaire</DialogTitle>
        <div>
          <DialogDescription>www.mon-site.com</DialogDescription>
          <div className="border-1 border-neutral-500 rounded-md p-1">
            {/* export this component in a memo() */}
            <iframe ref={ref} src={""}></iframe>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PreviewButtonDialog;

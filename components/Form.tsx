import { NextPage } from "next";

import {
  AlertDialog,
  AlertDialogTitle,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";

import { DataForm } from "./forms/DataForm";

interface Props {}

const Form: NextPage<Props> = ({}) => {
  return (
    <AlertDialog open>
      <AlertDialogContent>
        <AlertDialogHeader className="flex items-center justify-center">
          <AlertDialogTitle className="text-3xl">URL Shortner</AlertDialogTitle>

          <AlertDialogDescription className="text-center w-[83%]">
            Please ensure accurate details for successful submission. Inaccurate
            info may lead to processing delays.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <DataForm />
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Form;

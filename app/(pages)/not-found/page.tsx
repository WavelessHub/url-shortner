import { NextPage } from "next";

import { Loader2 } from "lucide-react";
import { AlertDialogHeader } from "@/components/ui/alert-dialog";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";

const Page: NextPage = ({}) => {
  return (
    <AlertDialog open>
      <AlertDialogContent>
        <AlertDialogHeader className="flex items-center justify-center px-4 py-2">
          <AlertDialogTitle className="text-3xl text-red-500 mb-2">
            NOT FOUND
          </AlertDialogTitle>

          <AlertDialogDescription className="text-center text-base">
            The URL which has been entered is invalid.
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Page;

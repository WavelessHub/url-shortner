"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { NextPage } from "next";

import axios from "axios";
import { Loader2 } from "lucide-react";
import { AlertDialogHeader } from "@/components/ui/alert-dialog";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";

interface Props {
  params: { routeId: string };
}

const Page: NextPage<Props> = ({ params }) => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const redirect = async () => {
      const res = await axios.options("/api/create", {
        data: { id: params.routeId },
      });

      res.data ? router.replace(res.data.url) : router.replace("/not-found");
    };

    setIsMounted(true);
    redirect();
  }, [params.routeId, router, isMounted]);

  if (!isMounted) return null;

  return (
    <AlertDialog open>
      <AlertDialogContent>
        <AlertDialogHeader className="flex items-center justify-center mb-6">
          <AlertDialogTitle className="text-3xl mb-1">
            Redirecting...
          </AlertDialogTitle>

          <AlertDialogDescription className="text-center w-[83%]">
            This may take upto a few seconds.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <Loader2 className="h-20 w-20 animate-spin mx-auto" />
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Page;

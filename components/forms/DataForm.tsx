"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  AlertDialogFooter,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";

import { Textarea } from "@/components/ui/textarea";

import { useDataForm } from "./hooks/useDataForm";
import { cn } from "@/lib/utils";
import { Clipboard, ClipboardCheck } from "lucide-react";

export function DataForm() {
  const {
    status,
    formState,
    hasCopied,
    onCopy,
    form,
    onSubmit,
    control,
    handleSubmit,
  } = useDataForm();

  return (
    <div>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
          <FormField
            name="url"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter your URL here</FormLabel>

                <FormControl>
                  <Textarea className="h-40" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {status.message && (
            <div
              className={cn(
                "border p-3 flex items-center justify-between rounded-md mb-8",
                status.type === "success"
                  ? "bg-green-200/50 border-green-300 text-green-600"
                  : "bg-red-200/80 border-red-300 text-red-600"
              )}
            >
              <p>{status.message}</p>

              {status.type !== "error" && (
                <div>
                  {hasCopied ? (
                    <ClipboardCheck
                      size={22}
                      className="text-green-600 hover:text-green-700 cursor-pointer"
                    />
                  ) : (
                    <Clipboard
                      size={22}
                      onClick={onCopy}
                      className="text-green-600 hover:text-green-700 cursor-pointer"
                    />
                  )}
                </div>
              )}
            </div>
          )}

          <AlertDialogFooter>
            <AlertDialogCancel
              type="submit"
              disabled={formState.isLoading}
              className="w-full active:scale-[0.98] transition h-12 text-white hover:text-white bg-indigo-500 hover:bg-indigo-600"
            >
              Submit
            </AlertDialogCancel>
          </AlertDialogFooter>
        </form>
      </Form>
    </div>
  );
}

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

export function DataForm() {
  const { form, onSubmit, control, handleSubmit } = useDataForm();

  return (
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

        <AlertDialogFooter>
          <AlertDialogCancel
            type="submit"
            className="w-full active:scale-[0.98] transition h-12 text-white hover:text-white bg-indigo-500 hover:bg-indigo-600"
          >
            Submit
          </AlertDialogCancel>
        </AlertDialogFooter>
      </form>
    </Form>
  );
}

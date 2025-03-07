import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";

const schema = z.object({
  url: z.string().url({ message: "Please enter a valid URL." }),
});

type SchemaType = z.infer<typeof schema>;

export const useDataForm = () => {
  const [status, setStatus] = useState<{
    message: string;
    type: "success" | "error" | null;
  }>({
    message: "",
    type: null,
  });

  const [hasCopied, setHasCopied] = useState(false);

  const form = useForm<SchemaType>({
    resolver: zodResolver(schema),
  });

  async function onSubmit({ url }: z.infer<typeof schema>) {
    const uuid = uuidv4().slice(0, 7);

    try {
      await axios.post("/api/create", { url, uuid, origin });

      form.reset();
      setStatus({ message: `${origin}/${uuid}`, type: "success" });
    } catch (error) {
      setStatus({ message: `Something went wrong.`, type: "error" });
    }
  }

  function onCopy() {
    setHasCopied(true);
    navigator.clipboard.writeText(status.message);
    toast.success("Successfully created the URL and copied to clipboard.");

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }

  return { status, hasCopied, onCopy, form, onSubmit, ...form };
};

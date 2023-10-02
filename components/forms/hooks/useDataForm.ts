import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

import axios from "axios";
import toast from "react-hot-toast";

const schema = z.object({
  url: z.string().url({ message: "Please enter a valid URL." }),
});

type SchemaType = z.infer<typeof schema>;

export const useDataForm = () => {
  const form = useForm<SchemaType>({
    resolver: zodResolver(schema),
  });

  async function onSubmit({ url }: z.infer<typeof schema>) {
    const uuid = uuidv4().slice(0, 7);

    try {
      await axios.post("/api/create", { url, uuid, origin });

      navigator.clipboard.writeText(`${origin}/${uuid}`);
      toast.success("Successfully created the URL and copied to clipboard.");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  }

  return { form, onSubmit, ...form };
};

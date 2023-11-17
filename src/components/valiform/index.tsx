import React from "react";
import { ValibotObjectSchema } from "@/components/valiform/types.ts";
import { DefaultValues, useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { cn } from "@/lib/utils.ts";
import { Form } from "@/components/ui/form.tsx";
import ValiFormObject from "@/components/valiform/object";
import { type Output } from "valibot";


interface Props<Schema extends ValibotObjectSchema> {
  schema: Schema;
}

export default function ValiForm<Schema extends ValibotObjectSchema>(
  {
    schema: formSchema
  }: Readonly<Props<Schema>>): React.ReactNode {

  const form = useForm<Output<typeof formSchema>>({
    resolver: valibotResolver(formSchema),
    defaultValues: {} as DefaultValues<Output<typeof formSchema>>,
    values: {} as Output<typeof formSchema>
  });

  console.log(formSchema);
  return <Form {...form}>
    <form
      onSubmit={(e) => {
        form.handleSubmit(console.log)(e);
      }}
      className={cn("bg-amber-500 space-y-5")}
    >
      <ValiFormObject schema={formSchema} form={form}></ValiFormObject>
    </form>
  </Form>;
}
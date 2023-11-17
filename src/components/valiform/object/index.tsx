import { ValibotBaseSchema, ValibotObjectSchema } from "@/components/valiform/types.ts";
import React from "react";
import { useForm } from "react-hook-form";

interface Props<Schema extends ValibotObjectSchema> {
  schema: Schema,
  form: ReturnType<typeof useForm>;
}

export default function ValiFormObject<Schema extends ValibotObjectSchema>(
  {
    schema,
    form
  }: Readonly<Props<Schema>>): React.ReactNode {

  const { entries } : { entries: Record<string, ValibotBaseSchema & {type: string}> } = schema;


  return <>
    {
      Object.keys(entries).map(entryName => {
        const entry = entries[entryName];
        if (entry.type == "object") {
          return <ValiFormObject key={entryName} schema={entry as ValibotObjectSchema} form={form}/>
        }
        return <>{entryName}</>
      })
    }
  </>;
}
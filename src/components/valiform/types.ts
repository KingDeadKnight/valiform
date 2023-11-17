import { BaseSchema, BaseSchemaAsync, ObjectSchema, ObjectSchemaAsync } from "valibot";

export type ValibotBaseSchema = BaseSchema | BaseSchemaAsync

export type ValibotObjectSchema = ObjectSchema<any> | ObjectSchemaAsync<any>
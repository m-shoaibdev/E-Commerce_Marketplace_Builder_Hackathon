import { type SchemaTypeDefinition } from "sanity";
import { productSchema } from "./products";
import { categorySchema } from "./categories";
import { homeHeroSchema } from "./home-hero";
import { logosSchema } from "./logos";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema, categorySchema, homeHeroSchema, logosSchema],
};

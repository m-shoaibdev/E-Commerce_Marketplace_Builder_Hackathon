import { defineType } from "sanity";

export const logosSchema = defineType({
  name: "logos",
  title: "Logos",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Logo Title",
      type: "string",
    },
    {
      name: "image",
      title: "Logo Image",
      type: "image",
    },
  ],
});

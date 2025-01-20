import { defineType } from "sanity";

export const categorySchema = defineType({
  name: "categories",
  title: "Categories",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Category Title",
      type: "string",
    },
    {
      name: "image",
      title: "Category Image",
      type: "image",
    },
    {
      title: "Number of Products",
      name: "products",
      type: "number",
    },
    {
      title: "Top Category",
      name: "topcategory",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          {
            title: "Category to be displayed at the top",
            value: "top",
          },
        ],
      },
    },
  ],
});

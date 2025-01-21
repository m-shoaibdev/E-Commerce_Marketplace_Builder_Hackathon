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
      validation: (Rule) => Rule.required().error("Category Title is required"),
    },
    {
      name: "image",
      title: "Category Image",
      type: "image",
      validation: (Rule) => Rule.required().error("Category Image is required"),
    },
    {
      title: "Category Slug / URL",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
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

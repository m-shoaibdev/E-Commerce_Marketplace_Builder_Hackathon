import { defineType } from "sanity";

export const homeHeroSchema = defineType({
  name: "homeHero",
  title: "Home Hero Section",
  type: "document",
  fields: [
    {
      name: "heading",
      title: "Headings",
      type: "object",
      fields: [
        {
          name: "small",
          title: "Small Heading",
          type: "string",
        },
        {
          name: "big",
          title: "Big Heading",
          type: "string",
        },
      ],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "button",
      title: "Button",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "href",
          title: "Link",
          type: "string",
        },
      ],
    },
  ],
});

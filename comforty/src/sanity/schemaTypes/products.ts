import { defineType } from "sanity";

export const productSchema = defineType({
  title: "Products",
  name: "products",
  type: "document",
  fields: [
    {
      title: "Product Title",
      name: "title",
      type: "string",
    },
    {
      title: "Sale Price",
      name: "salePrice",
      type: "number",
    },
    {
      title: "Price",
      name: "price",
      type: "number",
    },
    {
      title: "Badge / Label",
      name: "badge",
      type: "string",
    },
    {
      title: "Product Image",
      name: "image",
      type: "image",
    },
    {
      title: "Category",
      name: "category",
      type: "reference",
      to: [{ type: "categories" }],
    },
    {
      title: "Product Description",
      name: "description",
      type: "text",
    },
    {
      title: "Slug / Url of product",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLenght: 90,
      },
    },
    {
      title: "Stock / Inventory",
      name: "inventory",
      type: "number",
    },
    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Featured Product", value: "featured" },
          {
            title: "Follow products and discounts on Instagram",
            value: "instagram",
          },
          { title: "Gallery", value: "gallery" },
        ],
      },
    },
    {
      title: "Rating",
      name: "rating",
      type: "number",
    },
    {
      title: "Num Reviews",
      name: "reviews",
      type: "number",
    },
    // Adding shipping-related fields
    {
      title: "Weight",
      name: "weight",
      type: "number", // Weight in pounds or kilograms (depending on your shipping units)
    },
    {
      title: "Dimensions",
      name: "dimensions",
      type: "object",
      fields: [
        { name: "length", title: "Length", type: "number" },
        { name: "width", title: "Width", type: "number" },
        { name: "height", title: "Height", type: "number" },
      ],
    },
  ],
});

import { StaticImageData } from "next/image";

export interface Tproduct {
  _id: string;
  title: string;
  price: number;
  salePrice?: number;
  imageUrl: string;
  badge?: string;
  badgeColor?: string;
  slug: string;
  category: string;
  height: number;
  width: number;
  lenght: number;
  weight: number;
}

export interface TsingleProduct {
  _id: string;
  title: string;
  price: number;
  salePrice?: number;
  badge?: string;
  badgeColor?: string;
  imageUrl: string;
  rating: number;
  inventory: number;
  reviews: number;
  category: string;
  description: string;
  weight: number;
  lenght: number;
  width: number;
  height: number;
}

export interface ProductsCardProps {
  imageUrl: string | StaticImageData;
  label?: string;
  labelcolor?: string;
  title: string;
  price: number;
  salePrice?: number;
  productUrl?: string;
  category?: string;
  weight?: number;
  lenght?: number;
  width?: number;
  height?: number;
}
export interface IBag {
  imageUrl: string | StaticImageData;
  title: string;
  price: number;
  salePrice?: number;
  category?: string;
  //   size: string;
  quantity: number;
  favorite?: boolean;
  productUrl: string;
}

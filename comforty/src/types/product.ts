export interface Tproduct {
  _id: string;
  title: string;
  price: number;
  salePrice?: number;
  imageUrl: string;
  badge?: string;
  badgeColor?: string;
  slug: string;
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

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: image | string;
  categoryId: category | number;
}

export interface category {
  id: number;
  name: string;
}

export interface image {
  url: string;
  alt?: string;
}

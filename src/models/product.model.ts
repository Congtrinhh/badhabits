interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  shortDesc?: string;
  quantity?: number;
  slug?: string;
}

export { Product };

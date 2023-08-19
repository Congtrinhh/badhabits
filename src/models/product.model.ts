interface Product {
  id: number
  sku: string
  name: string
  price: number
  imageUrl: string
  shortDesc?: string
  quantity?: number
  slug?: string
  colorId?: number
  sizeId: number
}

export { Product }

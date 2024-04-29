export interface Product {
    id: number;
    title: string;
    product_type: string;
    description: string;
    price: number;
    color: string
    image: {
      photo_one: string,
      photo_two: string,
      photo_three: string,
    };
    best_seller: boolean
  }
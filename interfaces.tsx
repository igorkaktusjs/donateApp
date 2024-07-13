export interface Listing {
  name: string;
  description: string;
  category: {
    id: number;
    name: string;
    sleg: string;
    icon: string;
  };
  price: string;
  usage: string;
  image_url: string;
}

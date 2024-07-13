export interface Listing {
    listing_id: number;
    title: string;
    description: string;
    price: number;
    created_at: string;
    category: {
        id: number;
        name: string;
        sleg: string;
        icon: string;
      };
    name: string;
    usage: string;
    image_url: string;
}
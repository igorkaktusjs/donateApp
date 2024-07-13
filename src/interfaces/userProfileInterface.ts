import { Wishlist } from "./useWishlistInterface";

export interface Address {
    country: string;
    city: string;
    street: string;
    houseNumber: string;
}

export interface Review {
    id:number;
    userId: number;
    comment: string;
    rating: number;
}

export interface UserProfile {
    id: number;
    firstName:string;
    lastName: string;
    username: string;
    password: string;
    avatar: string;
    address: Address;
    email: string;
    phone: string;
    verified: boolean;
    registrationDate: string;
    status: string;
    rating: number;
    reviews: Review[],
    reviewCount: number;
    wishlist: Wishlist;
}
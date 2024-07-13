import { useState, useEffect, useCallback } from "react";
import { Wishlist } from "../interfaces/useWishlistInterface";
import { Listing } from "../interfaces/listingInterface";
import { LISTINGS } from "../data/index";
import { userProfiles } from "../data/userProfiles";


const useWishlist = () => {

const user = userProfiles[0];
const userWishlist = user.wishlist;

    const [listings, setListings] = useState<Listing[]>([]);
    const [wishlist, setWishlist] = useState<Wishlist>(userWishlist);


  useEffect(() => {
    const fetchListings = () => {
      const fetchedListing = LISTINGS.filter(listing => wishlist.listing_ids.includes(listing.listing_id)
      );
      setListings(fetchedListing);
    };
    fetchListings();
  }, [wishlist]);

  console.log(wishlist);
 
  const addToWishlist = useCallback((listingId: number) => {
    setWishlist(prevWishlist => {
      const updatedIds = [...prevWishlist.listing_ids, listingId];
      userProfiles[0].wishlist.listing_ids = updatedIds; 
      return { ...prevWishlist, listing_ids: updatedIds };
    });
  }, []);

  const removeFromWishlist = useCallback((listingId: number) => {
    setWishlist(prevWishlist => {
      const updatedIds = prevWishlist.listing_ids.filter(id => id !== listingId);
      userProfiles[0].wishlist.listing_ids = updatedIds; 
      return { ...prevWishlist, listing_ids: updatedIds };
    });
  }, []);

  const toggleWishlistItem = useCallback((listingId: number) => {
    if (wishlist.listing_ids.includes(listingId)) {
      removeFromWishlist(listingId);
    } else {
      addToWishlist(listingId);
    }
  }, [wishlist, addToWishlist, removeFromWishlist]);

  return {
    wishlist,
    listings,
    addToWishlist,
    removeFromWishlist,
    toggleWishlistItem,
  };
};

export default useWishlist;

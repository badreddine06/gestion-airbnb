import axios from "axios";
import { createUrl, post } from "./http";
import qs from "qs";

export const createListingAPI  = async (listingData) => {
    // console.log("this is the listing data: ",listingData);
    const result = await post(createUrl("/api/listings"), {
            ...listingData,
        }).catch(() => null);

    if(!result.data){
        alert("Could not create listing");
    }

    // you should add result.data
    return result;
};

export const getAllListingsAPI = async () => {
    const result = await axios.get(createUrl(`/api/listings`));

    if(!result){
        alert("Could not get all listings!");
        return [];
    }
    return result.data;
};

// dd
export const getSearchListing = async (searchTerm) => {
  const query = qs.stringify({
    where: {
      OR: [
        {
          locationData: {
            path: "place",
            string_contains: searchTerm,
          },
        },
        {
          locationData: {
            path: "region",
            string_contains: searchTerm,
          },
        },
        {
          locationData: {
            path: "country",
            string_contains: searchTerm,
          },
        },
        {
          locationData: {
            path: "district",
            string_contains: searchTerm,
          },
        },
        {
          locationData: {
            path: "landmark",
            string_contains: searchTerm,
          },
        },
        {
          locationData: {
            path: "locality",
            string_contains: searchTerm,
          },
        },
        {
          locationData: {
            path: "postcode",
            string_contains: searchTerm,
          },
        },
        {
          locationData: {
            path: "neighborhood",
            string_contains: searchTerm,
          },
        },
      ],
    },
    orderBy: { createdAt: "asc" },
  });
  const result = await axios.get(createUrl(`/api/listings?${query}`));
  if (!result) {
    console.log("not found");
  }

  console.log({ result });
  return result.data;
};

// dd

export const getUserListings = async (userId) => {
    const query = qs.stringify({
        where: { listingCreatedBy: { id: userId } },
    });

    const result = await axios.get(createUrl(`/api/listings?${query}`));

    if(!result){
        alert("Could not get all listings!");
        return [];
    }
    return result.data;
};

export const deleteListingAPI = async (id) => {
    const result = await axios.delete(createUrl(`/api/listings/${id}`));
    if (!result) {
        console.log("cannot delete listing");
    }
    return result;
};
  
export const getUserWishlists = async (userId) => {
    const query = qs.stringify({
        where: {
        user: { id: userId },
        },
        select: {
        listing: true,
        },
    });
    const result = await axios.get(createUrl(`/api/wishlists?${query}`)).catch(() => null);

    return result.data;
};

export const addToWishlists = async (id, userId) => {
    const query = {
    listing: { id },
    user: { id: userId },
    };

    const result = await post(createUrl("/api/wishlists"), { ...query }).catch(() => null);

    if (!result.data) {
    return alert("Could not create wishlist");
    }

    return result.data;
};

export const removeFromWishListAPI = async (id) => {
    const result = await axios.delete(createUrl(`/api/wishlists/${id}`));
    if (!result) {
        return alert("Could not Remove from wishlist");
    }

    return result;
};

export const getListing = async (listingId) => {
    const result = await axios.get(createUrl(`/api/listings/${listingId}`));
    if (!result) {
        return alert("no listing with given id");
    }

    return result.data;
};

export const addTrip = async (data) => {
    const query = {
      listing: {
        id: data.listingId,
      },
      user: { id: data.userId },
      tripInfo: data.tripData,
    };

    const result = await axios.post(createUrl("/api/trips"), { ...query });

    if (!result) {
      alert("failed");
    } else {
      return result;
    }
  };

  export const getUserTrips = async (userId) => {
    const query = qs.stringify({
      where: {
        user: { id: userId },
      },
      select: {
        listing: true,
      },
    });
    const result = (
      await axios.get(createUrl(`/api/trips?${query}`)).catch(() => null)
    )?.data;
  
    console.log({ result });
    return result;
  };

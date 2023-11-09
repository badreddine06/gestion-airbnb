// "use client";

import { useAppStore } from "airbnb/store/store";
import React from "react";
import ListingCard from "../listingCard";

const ListView = () => {
  const { listings } = useAppStore();

  return (
    <div className="grid grid-cols-5 justify-start items-start gap-10 py-10 px-20">
      {
        listings.map((listing) => <ListingCard key={listing.id} data={listing} />)
      }
      {
        listings.map((listing) => <ListingCard key={listing.id} data={listing} />)
      }
    </div>
  );
};

export default ListView;

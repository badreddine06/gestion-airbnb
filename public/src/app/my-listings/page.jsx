"use client";

import Footer from "airbnb/components/footer/Footer";
import ListingCard from "airbnb/components/listingCard";
import { getUserListings } from "airbnb/lib/lisitng";
import { useAppStore } from "airbnb/store/store";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
const Navbar = dynamic(() => import("airbnb/components/navbar/Navbar"), {
  ssr: false,
})

const page = () => {
  const { userInfo, userListings, setUserListings } = useAppStore();

  useEffect(() => {
    const getData = async () => {
      const data = await getUserListings(userInfo.id);
      console.log("sup 11: ", data);
      setUserListings(data);
    }

    if(userInfo){
      getData();
    }

  },[userInfo])

  return (
    <div>
      <Navbar />

      <div className="flex justify-center items-center pl-40">
        {
          userListings.map((listing, index) => (
            <div className="grid grid-cols-4 px-10 gap-3 py-10 w-full items-start">
              <ListingCard data={listing} isMyListing key={listing.id} />
            </div>
          ))
        }
      </div>

      <Footer />
    </div>
  );
};

export default page;

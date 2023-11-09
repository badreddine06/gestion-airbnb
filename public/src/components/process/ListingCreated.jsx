import { createListingAPI } from "airbnb/lib/lisitng";
import { useAppStore } from "airbnb/store/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Confetti from "react-confetti";

const ListingCreated = () => {
  const router = useRouter();

  const {
    userInfo,
    locationType,
    placeType,
    mapData,
    locationData,
    placeSpace,
    placeAmeneties,
    photos,
    title,
    description,
    price,
  } = useAppStore();

  useEffect(() => {
    console.log("this is the place type: ",placeType);
    createListingAPI(
      {
      locationType,
      placeType,
      mapData,
      locationData,
      placeSpace,
      placeAmeneties,
      photos,
      title,
      description,
      price,
      listingCreatedBy: { id: userInfo?.id },
      }
    )
  },[
    userInfo,
    locationType,
    placeType,
    mapData,
    locationData,
    placeSpace,
    placeAmeneties,
    photos,
    title,
    description,
    price,
  ])

  return (
    <div className="flex flex-col justify-center items-center gap-5 h-full">
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="font-semibold text-4xl">Congratulations!</h2>
        <p>You have successfully created your listing!</p>
        <div className="flex gap-5">
          <button 
            onClick={() => router.push("/")} 
            className="bg-[#222222] px-5 py-3 mt-5 text-white text-base font-medium rounded-md cursor-pointer"
          >
            Visit Home Page
          </button>
          <button 
            onClick={() => router.push("/my-listings")} 
            className="bg-airbnb-gradient px-5 py-3 mt-5 text-white text-base font-medium rounded-md cursor-pointer"
          >
            View you listing
          </button>
        </div>
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      </div>
    </div>
  );
};

export default ListingCreated;

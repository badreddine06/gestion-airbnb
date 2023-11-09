import { useAppStore } from "airbnb/store/store";
import Image from "next/image";
import React, { useState } from "react";

const ListingPhotos = () => {
  const { currentListing } = useAppStore();
  const [currentPhoto, setCurrentPhoto] = useState(0);
  return (
    <div className="flex gap-5 flex-col">
      <div className="relative w-full h-[60vh]">
        <Image alt="listing" fill src={currentListing.photos[currentPhoto]} />
      </div>
      {
        currentListing.photos.length > 1 && (
          <ul className="flex gap5 flex-wrap">
            {
              currentListing.photos.map((photo,index) => (
                <li key={photo} onClick={() => setCurrentPhoto(index)} className="relative w-48 h-32 cursor-pointer">
                  <Image src={photo} alt="listing" fill />
                </li>
              ))
            }
          </ul>
        )
      }
    </div>
  );
};

export default ListingPhotos;

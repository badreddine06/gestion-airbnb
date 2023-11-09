import { useAppStore } from "airbnb/store/store";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";
import React from "react";

const Photos = () => {
  const { photos, setPhotos} = useAppStore();

  const handleUpload = (data) => {
    setPhotos([...photos, data.info.secure_url])
  }

  return (
    <div className="flex flex-col justify-center items-center h-full gap-5">
      <h2 className="font-semibold text-4xl">Add some photos of your house</h2>
      <p>
        You'll need 5 photos to get started. You can add more or make changes later.
      </p>
      <CldUploadButton
        options={{ multiple: true }}
        onUpload={handleUpload}
        uploadPreset="fg1ccgwe"
      >
        <span className="bg-airbnb-gradient py-3 px-5 text-white text-base font-medium rounded-md cursor-pointer">
          Upload
        </span>
      </CldUploadButton>
      <div className="grid grid-cols-3 gap4 h-[55vh] overflow-auto pb-10 no-scrollbar">
        {
          photos.map((photo) => (
            <div key={photo} className="relative h-36 w-[200px]">
              <Image src={photo} fill alt="Upload" />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Photos;

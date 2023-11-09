import { useAppStore } from "airbnb/store/store";
import React from "react";
import FormInput from "../common/FormInput";

const PlaceDetails = () => {

  const {locationData, setLocationData} = useAppStore();

  const handleChange = (name, value) => {
    setLocationData({...locationData,[name]: value});
  };


  return <div className="flex flex-col justify-center items-center h-full w-full gap-2">
    <div className="flex flex-col gap-3">
      <h2 className="font-semibold text-4xl">Confirm your address</h2>
      <p>
        Your address is only shared with guests after they've made a reservation
      </p>
    </div>
    <div className="flex flex-col items-center h-full w-full gap-3 overflow-auto no-scrollbar pb-20 pt-5">
      <div className="flex flex-col gap-2 w-[30%]">
        <FormInput 
          islisting
          name="neighborhood"
          placeholder="House, flat, bldg, etc"
          setValue={handleChange}
          type="text"
          value={locationData?.neighborhood}
        />
      </div>
      <div className="flex flex-col gap-2 w-[30%]">
        <FormInput 
          islisting
          name="place"
          placeholder="Area/Village (if applicable)"
          setValue={handleChange}
          type="text"
          value={locationData?.place}
        />
        <FormInput 
          islisting
          name="locality"
          placeholder="House, flat, bldg, etc"
          setValue={handleChange}
          type="text"
          value={locationData?.locality}
        />
      </div>
      <div className="flex flex-col gap-2 w-[30%]">
        <FormInput 
          islisting
          name="landmark"
          placeholder="Nearby landmark (if applicable)"
          setValue={handleChange}
          type="text"
          value={locationData?.landmark}
        />
        <FormInput 
          islisting
          name="district"
          placeholder="City / town"
          setValue={handleChange}
          type="text"
          value={locationData?.district}
        />
      </div>
      <div className="flex flex-col gap-2 w-[30%]">
          <FormInput
            isListing
            name="postcode"
            placeholder="PIN code"
            setValue={handleChange}
            type="text"
            value={locationData?.postcode}
          />
          <FormInput
            isListing
            name="country"
            placeholder="Country / province"
            setValue={handleChange}
            type="text"
            value={locationData?.country}
          />
        </div>
    </div>
  </div>;
};

export default PlaceDetails;

import { AmenetiesType } from "airbnb/data/Amenities";
import { useAppStore } from "airbnb/store/store";
import React from "react";

const ProcessAmeneties = () => {
  const { placeAmeneties, setPlaceAmeneties} = useAppStore();

  const addAmenity = (name) => setPlaceAmeneties([...placeAmeneties, name]);
  const removeAmenity = (name) => {
    const index = placeAmeneties.findIndex((amenity) => amenity === name);
    if (index !== -1) {
      const cloneAmenities = [...placeAmeneties];
      cloneAmenities.splice(index,1);
      setPlaceAmeneties(cloneAmenities);
    }
  }


  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col gap-3">
        <h2 className="font-semibold text-4xl">Tell guest what your place has to offer</h2>
        <p>You can add more amenities after you publish your listing.</p>
        <div className="fles flex-col gap4 max-h-[65vh] overflow-auto scroll no-scrollbar">
          {
            AmenetiesType.map(({type, data}) => (
              <div
                key={type}
                className="flex flex-col gap-5"
              >
                {
                  type === "advanced" && (
                    <span className="text-lg font-medium pt-6">Do you have any standout amenities ?</span>
                  )
                }
                {
                  type === "safety" && (
                    <span className="text-lg font-medium pt-6">Do you have any safety items ?</span>
                  )
                }
                <div className="grid grid-cols-3 gap-5">
                  {
                    data.map(({name, svgPath}) => (
                      <button 
                        key={name} 
                        className={
                          `flex flex-col justify-start font-semibold border border-gray-300 rounded-md p-3 hover:border-gray-950 transition-all duration-300
                          ${placeAmeneties?.includes(name) && "border-gray-950 bg-slate-100"}`
                        }
                        onClick={() => 
                          placeAmeneties?.includes(name)
                          ? removeAmenity(name)
                          : addAmenity(name)
                        }
                      >
                        {svgPath}
                        <span className="text-airbnb-light-black font-medium">{name}</span>
                      </button>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default ProcessAmeneties;

import { listingTypes } from "airbnb/data/listingTypes";
import { useAppStore } from "airbnb/store/store";
import React from "react";

const ListingTypeSelector = () => {
  const { locationType, setLocationType} = useAppStore();
  const handleSelection = (type) => {
    setLocationType(type);
  };

  return <div className="flex justify-center items-start max-h-[80vh] h-[80vh]">
    <div>
      <h2 className="font-semibold text-4xl">
        Wich of these best describes your place?
      </h2>
      <div className="grid grid-cols-3 gap-5 max-h-[70vh] overflow-auto scroll no-scrollbar my-10 pb-5">
        {
          listingTypes.map((type) => (
            <button 
              key={type.name} 
              className={`flex flex-col font-semibold border border-gray-300 rounded-md p-3 hover:border-gray-950 transition-all duration-300 ${
                type.name === locationType && "border-gray-950 bg-slate-100"
              }`}
              onClick={() => handleSelection(type.name)}
            >
              {type.svgPath} <span>{type.name}</span>
            </button>
          ))
        }
      </div>
    </div>
  </div>;
};

export default ListingTypeSelector;

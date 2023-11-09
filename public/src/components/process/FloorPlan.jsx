import { useAppStore } from "airbnb/store/store";
import React from "react";

const FloorPlan = () => {
  const {placeSpace, setPlaceSpace} = useAppStore();

  const handleIncrement = (type) => setPlaceSpace({...placeSpace,[type]: placeSpace[type]+1 });
  const handleDecrement = (type) => setPlaceSpace({...placeSpace,[type]: placeSpace[type]-1 });
  return( 
    <div className="flex flex-col justify-center items-center h-full gap-5">
      <div className="flex flex-col gap-3">
        <h2 className="font-semibold text-4xl">Share some basics about your place</h2>
        <p>You'll add more details later, such as bed types.</p>
      </div>
      <div className="flex flex-col w-[40%] gap-5">
        {
          Object.keys(placeSpace).map(place => (
            <div key={place} className="flex justify-between items-center w-full text-lg">
              <span className="capitalize">{place}</span>
              <div className="flex justify-between items-center w-48 gap-10">
                <button onClick={() => handleDecrement(place)} className="border border-gray-200 py-[10px] rounded-full px-5 flex justify-center items-center hover:border-gray-500">-</button>
                <button>{placeSpace[place]}</button>
                <button onClick={() => handleIncrement(place)} className="border border-gray-200 py-[10px] rounded-full px-5 flex justify-center items-center hover:border-gray-500">+</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default FloorPlan;

import { useAppStore } from "airbnb/store/store";
import React from "react";

const Price = () => {
  const {price, setPrice} = useAppStore();

  return (
    <div className="flex justify-center items-center h-full text-airbnb-light-black">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-4xl">Now, set your price</h2>
          <p>You can change it anytime.</p>
        </div>
        <div className="flex flex-col gap-4">
          <textarea 
            className="border border-gray-400 h-56 w-[550px] rounded-lg active:border-gray-950 p-6 no-scrollbar text-2xl"
            value={price}
            onChange={(e)=> {
              if(e.target.value){
                setPrice(parseInt(e.target.value));
              }else {
                setPrice(0);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Price;

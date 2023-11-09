import { useAppStore } from "airbnb/store/store";
import House from "airbnb/svg/lisitngTypes/house";
import Room from "airbnb/svg/lisitngTypes/room";
import SharedRoom from "airbnb/svg/lisitngTypes/shared-room";
import React from "react";

const ListingPlaceType = () => {
  const {placeType, setPlaceType} = useAppStore();
  const handleSelection = (type) => {
    setPlaceType(type);
  };
  const data = [
    {
      title: "An entire place",
      subTitle: "Guests have the whole place to themselves.",
      svg: <House />,
    },
    {
      title: "A room",
      subTitle:
        "Guests have their own room in a home, plus access to shared spaces.",
      svg: <Room />,
    },
    {
      title: "A shared room",
      subTitle:
        "Guests sleep in a room or common area that may be shared with you or others.",
      svg: <SharedRoom />,
    },
  ];

  return <div className="flex flex-col justify-center items-center h-full gap-10">
    <h2 className="font-semibold text-4xl">
      Which of these best describe you place?
    </h2>
    <ul className="flex flex-col gap-5 w-[800px]">
      {
        data.map((place) => (
          <li
            key={place.title}
            className={`flex justify-between border border-gray-300 rounded-md p-7 hover:border-gray-500 cursor-pointer transition-all duration-300 ${
              place.title === placeType && "border-gray-950 bg-slate-100"
            }`}
            onClick={() => handleSelection(place.title)}
          >
            <div>
              <h4 className="font-semibold">{place.title}</h4>
              <p>{place.subTitle}</p>
            </div>
            {place.svg}
          </li>
        ))
      }
    </ul>
  </div>;
};

export default ListingPlaceType;

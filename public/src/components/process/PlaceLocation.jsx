import React from "react";
import { Map } from "react-map-gl";
import GeocoderControl from "./geocoder-control";
import { useAppStore } from "airbnb/store/store";

const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN; // Set your mapbox token here

const PlaceLocation = () => {
  const {setMapData, setLocationData } = useAppStore();

  const getResults = ({ result }) => {
    const [longitude, latitude] = result?.geometry?.coordinates;
    const data = {
      landmark: result?.text,
      neighborhood: "",
      postcode: "",
      locality: "",
      place: "",
      district: "",
      region: "",
      country: "",
    };
    result?.context?.forEach((item) => {
      Object.keys(data)?.forEach((key) => {
        if(item?.id?.startsWith(key+".")){
          data[key] = item?.text;
        }
      });
    });
    setMapData({ longitude, latitude});
    setLocationData({...data});
  };

  return <div className="flex flex-col justify-center items-center h-full gap-5">
    <h2 className="font-semibold text-4xl">
      wich of these best describe your place?
    </h2>
    <p>
      your address is only shared with guests after they've made a reservation.
    </p>
    <div className="h-[400px] w-[700px]">
      <Map
        initialViewState={{
          longitude: -79.4512,
          latitude: 43.6568,
          zoom: 13
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={TOKEN}
      >
        <GeocoderControl mapboxAccessToken={TOKEN} position="top-left" 
          marker={true}
          onLoading={() => {}}
          onResults={() => {}}
          onResult={getResults}
          onError={() => {}}
        />
      </Map>
    </div>
  </div>;
};

export default PlaceLocation;

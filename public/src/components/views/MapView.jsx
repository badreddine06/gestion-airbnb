import { useAppStore } from "airbnb/store/store";
import { Map, Marker, Popup } from "react-map-gl";
import React, { useMemo, useState } from "react";
import Pin from "../common/Pin";
import ListingCard from "../listingCard";

const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN; // Set your mapbox token here

const MapView = () => {
  const { listings } = useAppStore();

  const [ popupInfo, setPopupInfo ] = useState(null);

  const pins = useMemo(() => listings.map((data,index) => 
    <Marker 
      key={`marker-${data.id}`}
      longitude={data.mapData.longitude}
      latitude={data.mapData.latitude}
      anchor="top"
      onClick={(e) => {
        e.originalEvent.stopPropagation();
        setPopupInfo(data);
      }}
    >
      <Pin />
    </Marker>
  ))

  return (
    <div className="h-[73vh] max-w-[100vw] pt-2">
      <Map
        initialViewState={{
          longitude: -79.4512,
          latitude: 43.6568,
          zoom: 13
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={TOKEN}
      >
        { pins }
        {
          popupInfo && 
          <Popup anchor="top" onClose={() => setPopupInfo(null)} longitude={popupInfo.mapData.longitude} latitude={popupInfo.mapData.latitude}>
            <div >
              <ListingCard data={popupInfo}/>
            </div>
          </Popup>
        }
      </Map>
    </div>
  );
};

export default MapView;

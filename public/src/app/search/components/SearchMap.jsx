import Pin from "airbnb/components/common/Pin";
import ListingCard from "airbnb/components/listingCard";
import { useAppStore } from "airbnb/store/store";
import React, { useMemo, useState } from "react";
import { Map, Marker, Popup } from "react-map-gl";


const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export default function SearchMap() {
  const { searchLocation, searchListings } = useAppStore();

  const [popupInfo, setPopupInfo] = useState(null);
  const pins = useMemo(
    () =>
      searchListings?.map((data, index) => (
        <Marker
          key={`marker-${index}`}
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
      )),
    [searchListings]
  );
  return (
    <div className="h-full w-full">
      <Map
        initialViewState={{
          longitude: searchLocation?.longitude ?? 72.5714,
          latitude: searchLocation?.latitude ?? 23.0225,
          zoom: 5,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={TOKEN}
      >
        {pins}

        {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.mapData.longitude)}
            latitude={Number(popupInfo.mapData.latitude)}
            onClose={() => setPopupInfo(null)}
          >
            <div>
              <ListingCard data={popupInfo} />
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}

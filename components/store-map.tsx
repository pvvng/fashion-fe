"use client";

import MapWrapper from "./map-wrapper";
import Map from "./map";
import CustomOverlay from "./custom-overlay";
import Link from "next/link";
import useSearchPlace from "@/util/use-search-place";
import { BuildingStorefrontIcon } from "@heroicons/react/24/outline";
import useGeolocation from "@/util/use-geolcation";
import Marker from "./marker";

export default function StoreMap() {
  const location = useGeolocation();
  const { map, createMap, search, message } = useSearchPlace(location);

  return (
    <MapWrapper>
      <Map
        center={location.coordinates}
        className="aspect-square rounded-2xl"
        onCreate={createMap}
      >
        <Marker position={location.coordinates} map={map} />
        {search.map((item) => (
          <CustomOverlay key={item.id} position={item.position} map={map}>
            <div className="py-1 px-2 text-white rounded-md shadow font-semibold text-sm bg-blue-600 flex gap-1 items-center">
              <BuildingStorefrontIcon className="size-4" />
              {item.place_name}
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-10 border-t-blue-600" />
          </CustomOverlay>
        ))}
      </Map>
      <div className="flex flex-col gap-5 py-5">
        {message && <p className="text-center">{message}</p>}
        {search.map((item) => (
          <div key={item.id} id={item.id} className="flex flex-col gap-2">
            <div>
              <Link
                href={item.place_url}
                className="font-semibold text-xl text-blue-600 hover:text-blue-500 transition-colors"
                target="_blank"
              >
                {item.place_name}
              </Link>
              {item.phone && (
                <p className="text-sm text-neutral-400">{item.phone}</p>
              )}
            </div>
            <div>
              <p className="text-sm">{item.address_name}</p>
              <p className="text-sm">{item.road_address_name}</p>
            </div>
          </div>
        ))}
      </div>
    </MapWrapper>
  );
}

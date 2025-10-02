"use client";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Tilt } from "./ui/tilt";

const center = { lat: 48.989_620_2, lng: 21.236_389_1 };
const containerStyle = { width: "100%", height: "100%" };

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";

export function GoogleMapComponent() {
  return (
    <Tilt
      className="group relative size-full"
      isRevese
      rotationFactor={4}
      springOptions={{
        stiffness: 26.7,
        damping: 4.1,
        mass: 0.2,
      }}
      style={{
        transformOrigin: "center center",
      }}
    >
      <div className="relative size-full overflow-hidden rounded-4xl bg-brand shadow-2xl drop-shadow-2xl">
        <LoadScript googleMapsApiKey={apiKey}>
          <GoogleMap
            center={center}
            mapContainerStyle={{ ...containerStyle }}
            zoom={17}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </Tilt>
  );
}

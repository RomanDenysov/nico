"use client";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const center = { lat: 48.989_620_2, lng: 21.236_389_1 };
const containerStyle = { width: "100%", height: "100%" };

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";

export function GoogleMapComponent() {
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap center={center} mapContainerStyle={containerStyle} zoom={17}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

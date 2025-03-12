import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import axios from "axios";
import LocationSearch from "./LocationSearch";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  const [selectedLocation, setSelectedLocation] = useState({
    latitude: 17.33091, // Default Hyderabad location
    longitude: 78.537971,
    name: "Hyderabad, Telangana",
  });

  // Function to fetch location name from coordinates
  const fetchLocationName = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );
      return response.data.display_name || "Unknown Location";
    } catch (error) {
      console.error("Error fetching location name:", error);
      return "Unknown Location";
    }
  };

  // Custom Component for Handling Click Events on Map
  const LocationMarker = () => {
    useMapEvents({
      click: async (e) => {
        const { lat, lng } = e.latlng;
        const locationName = await fetchLocationName(lat, lng);

        setSelectedLocation({
          latitude: lat,
          longitude: lng,
          name: locationName,
        });
      },
    });

    return selectedLocation.latitude ? (
      <Marker
        position={[selectedLocation.latitude, selectedLocation.longitude]}
      >
        <Popup>{selectedLocation.name}</Popup>
      </Marker>
    ) : null;
  };

  return (
    <div>
      <MapContainer
        center={[selectedLocation.latitude, selectedLocation.longitude]}
        zoom={15}
        className="rounded-3xl shadow-3xl "
        style={{ height: "34rem", width: "40rem" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker />
      </MapContainer>
    </div>
  );
};

export default MapComponent;

import { useUser } from "@clerk/clerk-react";
import MapComponent from "./Map";

const LocationBox = ({ upload }) => {
  const { user } = useUser();
  return (
    <div className="p-4 mt-2">
      <h1 className="text-white text-4xl font-semibold text-center">
        {upload ? "Choose location on map" : `Welcome, ${user.firstName}!`}
      </h1>
      <div className="p-4 ml-8">
        <MapComponent />
      </div>
    </div>
  );
};

export default LocationBox;

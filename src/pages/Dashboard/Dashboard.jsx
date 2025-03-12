import LocationBox from "../../components/Locationbox";
import PickupBox from "../../components/Pickupbox";

const Dashboard = () => {
  return (
    <div className="h-screen w-full">
      <div className="flex">
        <div className="flex-1 justify-center items-center">
          <PickupBox />
        </div>
        <div className="flex-1 h-screen  bg-green-700 ">
          <LocationBox upload={false} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

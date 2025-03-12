import React from "react";
import PickupNotificationCard from "../../components/NotificationCard";

const NotificationPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold ml-2 mb-4">Notifications</h1>

      <PickupNotificationCard />
    </div>
  );
};

export default NotificationPage;

import React from "react";
import OrderCard from "../../components/Ordercard";

const HistoryPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold ml-2 mb-4">History</h1>

      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
    </div>
  );
};

export default HistoryPage;

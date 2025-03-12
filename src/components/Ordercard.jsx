const OrderCard = () => {
  return (
    <div className="bg-green-800 flex justify-between items-center p-4 rounded-lg text-white m-2">
      <div>
        <p className="text-2xl">Captain</p>
        <p>orderId:12399784</p>
      </div>
      <p>Date</p>
      <p>Time</p>
    </div>
  );
};
export default OrderCard;

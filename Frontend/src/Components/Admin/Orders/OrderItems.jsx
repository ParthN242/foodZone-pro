import React from "react";

const OrderItems = ({ item }) => {
  const address = item.address + " , " + item.city + " , " + item.country;
  return (
    <tr className=" border-b border-gray-500 p-4 text-center hover:bg-gray-200 transition duration-75">
      <td className="truncate p-4 text-left">{item._id}</td>
      <td className="p-4">{item.userEmail}</td>
      <td className="p-4 text-wrap w-max">{address}</td>
      <td className="p-4">{item.cartItems.length}</td>
      <td className="p-4">₹{item.subTotal}</td>
      <td className="text-right p-4">
        <button className="text-orange-500 hover:underline">Show</button>
      </td>
    </tr>
  );
};

export default OrderItems;

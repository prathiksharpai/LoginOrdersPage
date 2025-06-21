import React from 'react';

const OrderCard = ({ order }) => {
  const statusColor =
    order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700';

  return (
    <div className="bg-white shadow-md hover:shadow-lg hover:scale-[1.05] transition-transform duration-200 rounded-lg p-4 flex gap-4 items-center cursor-pointer group relative">
      <img
        src={order.image}
        alt={order.item}
        className="w-16 h-16 object-cover rounded-md border"
      />
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-gray-800">{order.item}</h3>
        <p className="text-gray-500">₹{order.price}</p>
        <span className={`inline-block px-2 py-1 text-sm font-medium rounded ${statusColor}`}>
          {order.status}
        </span>
      </div>

      {/* Hover Text */}
      <span className="absolute bottom-2 right-4 text-sm text-blue-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        Click for details
      </span>
    </div>
  );
};

export default OrderCard;

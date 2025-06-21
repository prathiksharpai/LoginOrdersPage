import React from "react";

const OrderModal = ({ order, onClose }) => {
  if (!order) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4">Order Details</h2>
        <img
          src={order.image}
          alt={order.item}
          className="w-24 h-24 object-cover mx-auto mb-4"
        />
        <p><strong>Item:</strong> {order.item}</p>
        <p><strong>Price:</strong> ₹{order.price}</p>
        <p>
          <strong>Status:</strong>{" "}
          <span className={order.status === "Delivered" ? "text-green-600" : "text-red-600"}>
            {order.status}
          </span>
        </p>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;

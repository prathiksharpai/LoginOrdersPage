import React from 'react';

const OrderTable = ({ orders }) => {
  return (
    <div className="overflow-x-auto shadow rounded-lg">
      <table className="min-w-full bg-white rounded-lg">
        <thead className="bg-blue-100 text-blue-800">
          <tr>
            <th className="py-3 px-4 text-left">Order ID</th>
            <th className="py-3 px-4 text-left">Item</th>
            <th className="py-3 px-4 text-left">Price (₹)</th>
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td colSpan="3" className="text-center py-4 text-gray-500">No orders found</td>
            </tr>
          ) : (
            orders.map(order => (
              <tr key={order.id} className="hover:bg-gray-100">
                <td className="py-3 px-4">{order.id}</td>
                <td className="py-3 px-4">{order.item}</td>
                <td className="py-3 px-4">₹{order.price}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;

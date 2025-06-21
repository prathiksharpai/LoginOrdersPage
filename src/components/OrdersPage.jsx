import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OrderCard from './OrderCard';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import OrderModal from './OrderModal';

const OrdersPage = () => {
  const navigate = useNavigate();

  const [allOrders, setAllOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState({ type: "", value: "" });
  const [sortOption, setSortOption] = useState("");

  const itemsPerPage = 5;

  // ✅ Fetch orders from mock backend
  useEffect(() => {
    fetch("http://localhost:5000/api/orders")
      .then((res) => res.json())
      .then((data) => {
        setAllOrders(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch orders", err);
        setLoading(false);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  const closeModal = () => {
    setSelectedOrder(null);
  };

  // 🔍 Filter logic
  const filteredOrders = allOrders.filter(order => {
    const matchesSearch = order.item.toLowerCase().includes(searchTerm.toLowerCase());
    const priceVal = parseFloat(priceFilter.value);
    let matchesPrice = true;

    if (priceFilter.type === "less" && !isNaN(priceVal)) {
      matchesPrice = order.price < priceVal;
    } else if (priceFilter.type === "greater" && !isNaN(priceVal)) {
      matchesPrice = order.price > priceVal;
    }

    return matchesSearch && matchesPrice;
  });

  // 🔃 Sorting logic
  let sortedOrders = [...filteredOrders];
  if (sortOption === "price-asc") {
    sortedOrders.sort((a, b) => a.price - b.price);
  } else if (sortOption === "price-desc") {
    sortedOrders.sort((a, b) => b.price - a.price);
  } else if (sortOption === "name-asc") {
    sortedOrders.sort((a, b) => a.item.localeCompare(b.item));
  } else if (sortOption === "name-desc") {
    sortedOrders.sort((a, b) => b.item.localeCompare(a.item));
  }

  // 📄 Pagination logic
  const totalPages = Math.ceil(sortedOrders.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentOrders = sortedOrders.slice(indexOfFirst, indexOfLast);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-700">Your Orders</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
        >
          Logout
        </button>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Search and Filter */}
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          priceFilter={priceFilter}
          setPriceFilter={setPriceFilter}
        />

        {/* Sorting */}
        <div className="flex justify-end mt-4">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="px-4 py-2 rounded-md border bg-white shadow text-sm"
          >
            <option value="">Sort By</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A–Z</option>
            <option value="name-desc">Name: Z–A</option>
          </select>
        </div>

        {/* Loading Indicator */}
        {loading ? (
          <p className="text-center text-gray-500 mt-6">Loading orders...</p>
        ) : (
          <>
            {/* Orders Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {currentOrders.length > 0 ? (
                currentOrders.map(order => (
                  <div key={order.id} onClick={() => handleOrderClick(order)} className="cursor-pointer">
                    <OrderCard order={order} />
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 col-span-full">No orders found.</p>
              )}
            </div>

            {/* Pagination */}
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </div>

      {/* Modal */}
      {selectedOrder && (
        <OrderModal order={selectedOrder} onClose={closeModal} />
      )}
    </div>
  );
};

export default OrdersPage;

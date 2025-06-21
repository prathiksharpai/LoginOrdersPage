import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, priceFilter, setPriceFilter }) => {
  return (
    <div className="space-y-4 md:space-y-0 md:flex md:items-center md:gap-4 mb-6">
      <input
        type="text"
        placeholder="Search orders..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        className="flex-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <select
        value={priceFilter.type}
        onChange={(e) => setPriceFilter({ ...priceFilter, type: e.target.value })}
        className="px-3 py-2 border rounded-md"
      >
        <option value="">Filter</option>
        <option value="less">Less than</option>
        <option value="greater">Greater than</option>
      </select>
      <input
        type="number"
        placeholder="Price"
        value={priceFilter.value}
        onChange={(e) => setPriceFilter({ ...priceFilter, value: e.target.value })}
        className="px-4 py-2 border rounded-md"
      />
    </div>
  );
};

export default SearchBar;

import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => (
  <div className="flex justify-center mt-6 space-x-2">
    {Array.from({ length: totalPages }, (_, i) => (
      <button
        key={i}
        onClick={() => onPageChange(i + 1)}
        className={`px-4 py-2 rounded ${
          currentPage === i + 1
            ? "bg-blue-600 text-white"
            : "bg-white border border-blue-600 text-blue-600 hover:bg-blue-100"
        }`}
      >
        {i + 1}
      </button>
    ))}
  </div>
);

export default Pagination;

import React from 'react';

const Pagination = ({ currentPage, onPageChange }) => {
  return (
    <div className="flex justify-center items-center gap-4 mt-8 top-60 md:grid-cols-2">
      <button
        className="bg-gray-700 text-white px-4 py-2 rounded-lg disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        Previous
      </button>
      <span className="text-white">Page {currentPage}</span>
      <button
        className="bg-gray-700 text-white px-4 py-2 rounded-lg"
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

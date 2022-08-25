import React from "react";
import "./index.css";

const Pagination = ({ handleChangePage, currentPage }) => {
  return (
    <div className="paginationContainer">
      <button
        disabled={currentPage === 1}
        onClick={() => handleChangePage("previous")}
      >
        prev
      </button>
      <span>{currentPage}</span>
      <button onClick={() => handleChangePage("next")}>next</button>
    </div>
  );
};

export default Pagination;

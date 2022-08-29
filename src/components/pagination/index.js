import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Pagination = ({ currentPage, handleChangePage }) => {
  return (
    <div className="paginationContainer">
      <button
        disabled={currentPage === 1}
        onClick={() => handleChangePage('previous')}
      >
        prev
      </button>
      <span>{currentPage}</span>
      <button onClick={() => handleChangePage('next')}>next</button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  handleChangePage: PropTypes.func.isRequired,
};

export default Pagination;

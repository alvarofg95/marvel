import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ascendingLogo from 'assets/ascending.png';
import descendingLogo from 'assets/descending.png';
import { actionSetFilter } from 'redux/actions';
import './index.css';

const Filter = ({ filter, setFilter }) => {
  const { orderBy, sort, titleStartsWith } = filter;

  const onChangeInput = (input = {}, key) => {
    let { target: { value } = {} } = input;
    if (key === 'sort') {
      const oppositeSorter = {
        ascending: 'descending',
        descending: 'ascending',
      };
      value = oppositeSorter[sort];
    }
    setFilter({ key, value });
  };

  return (
    <div className="filterContainer">
      <input
        type="text"
        placeholder="Search"
        onChange={(input) => onChangeInput(input, 'titleStartsWith')}
        defaultValue={titleStartsWith}
        className="searchInput"
      />
      <div className="orderBy">
        <span>ORDER BY</span>
        <select
          onChange={(input) => onChangeInput(input, 'orderBy')}
          value={orderBy}
        >
          <option value="title">TITLE</option>
          <option value="onsaleDate">SALE DATE</option>
        </select>
      </div>
      <div className="sort">
        <span>SORT</span>
        <img
          className="sortButton"
          onClick={() => onChangeInput({}, 'sort')}
          src={sort === 'ascending' ? descendingLogo : ascendingLogo}
          alt="sort"
        />
      </div>
    </div>
  );
};

const mapStateToProps = ({ comics }) => {
  return {
    filter: comics.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (filter) => {
      dispatch(actionSetFilter(filter));
    },
  };
};

Filter.propTypes = {
  filter: PropTypes.shape({
    orderBy: PropTypes.string,
    sort: PropTypes.string,
    titleStartsWith: PropTypes.string,
  }),
  setFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

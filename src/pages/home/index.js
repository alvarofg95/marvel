import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Comics from 'components/comicsList';
import { apiCall, GET_COMICS } from 'utils/api';
import Filter from 'components/filter';
import { actionSetComicsList, actionSetPage } from 'redux/actions';
import Pagination from 'components/pagination';
import Loading from 'components/loading';
import ErrorPage from 'components/errorPage';

const Home = ({
  setComicsList,
  setPage,
  list: comics = [],
  filter,
  page,
  total,
  load,
  error,
}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (load) {
      setLoading(true);
      apiCall(GET_COMICS, filter).then((res) => {
        setComicsList(res);
        setLoading(false);
        window.scroll({ top: 0 });
      });
    }
  }, [filter.orderBy, filter.titleStartsWith, filter.offset]);

  const handleChangePage = (action) => {
    setPage(action);
  };

  return error ? (
    <ErrorPage />
  ) : (
    <>
      <Filter />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Comics items={comics} />
          <Pagination
            handleChangePage={handleChangePage}
            currentPage={page}
            total={total}
          />
        </>
      )}
    </>
  );
};

const mapStateToProps = ({ comics }) => {
  return {
    ...comics,
    filter: {
      orderBy: comics.filter.orderBy,
      titleStartsWith: comics.filter.titleStartsWith,
      offset: comics.filter.offset,
      format: comics.filter.format,
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setComicsList: (list) => {
      dispatch(actionSetComicsList(list));
    },
    setPage: (page) => {
      dispatch(actionSetPage(page));
    },
  };
};

Home.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      thumbnail: PropTypes.shape({
        path: PropTypes.string,
        extension: PropTypes.string,
      }),
      title: PropTypes.string,
    })
  ),
  filter: PropTypes.shape({
    orderBy: PropTypes.string,
    titleStartsWith: PropTypes.string,
    offset: PropTypes.number,
    format: PropTypes.string,
  }),
  page: PropTypes.number,
  total: PropTypes.number,
  load: PropTypes.bool,
  error: PropTypes.bool,
  setPage: PropTypes.func.isRequired,
  setComicsList: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

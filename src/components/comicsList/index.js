import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getImgUrl } from 'utils/utils';
import './index.css';

const getImgClassName = (url) => {
  return url.indexOf('image_not_available') > -1 ? 'noImage' : null;
};

const Comics = ({ items }) => {
  return (
    <div className="comicsContainer">
      {items.map((comic) => {
        const { id, thumbnail, title } = comic;
        return (
          <Link
            className="comic"
            key={id}
            to={`/comic/${id}`}
            title="View details"
          >
            <img
              className={getImgClassName(thumbnail.path)}
              loading="lazy"
              width={200}
              src={getImgUrl(thumbnail)}
              alt={title}
            />
            <span className="comicName">{title}</span>
          </Link>
        );
      })}
    </div>
  );
};

Comics.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      thumbnail: PropTypes.shape({
        path: PropTypes.string,
        extension: PropTypes.string,
      }),
      title: PropTypes.string,
    })
  ),
};

export default Comics;

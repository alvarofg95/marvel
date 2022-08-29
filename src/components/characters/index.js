import React from 'react';
import PropTypes from 'prop-types';
import { getImgUrl } from 'utils/utils';
import arrowDown from 'assets/down.png';
import './index.css';

const Characters = ({ characters = [], handleShowCharacters }) => (
  <>
    <span className="showCharacters" onClick={handleShowCharacters}>
      Show characters <img src={arrowDown} alt="show characters" />
    </span>
    <div className="characters">
      {characters.map((item, index) => {
        const { name, thumbnail } = item;
        return (
          <img
            key={`${name}_${index}`}
            width={100}
            alt={name}
            src={getImgUrl(thumbnail)}
            title={name}
          />
        );
      })}
    </div>
  </>
);

Characters.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      thumbnail: PropTypes.shape({
        path: PropTypes.string,
        extension: PropTypes.string,
      }),
    })
  ),
  handleShowCharacters: PropTypes.func.isRequired,
};

export default Characters;

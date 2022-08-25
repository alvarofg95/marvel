import React from "react";
import { getImgUrl } from "utils/utils";
import arrowDown from "assets/down.png";
import "./index.css";

const Characters = ({ characters = [], handleShowCharacters }) => (
  <>
    <span className="showCharacters" onClick={handleShowCharacters}>
      Show characters <img src={arrowDown} alt="show characters" />
    </span>
    <div className="characters">
      {characters.map((item, index) => (
        <img
          key={`${item.name}_${index}`}
          width={100}
          alt={item.name}
          src={getImgUrl(item.thumbnail)}
          title={item.name}
        />
      ))}
    </div>
  </>
);

export default Characters;

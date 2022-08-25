import React from "react";
import { Link } from "react-router-dom";
import { getImgUrl } from "utils/utils";
import "./index.css";

const getImgClassName = (url) => {
  return url.indexOf("image_not_available") > -1 ? "noImage" : null;
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

export default Comics;

import Characters from "components/characters";
import ErrorPage from "components/errorPage";
import Loading from "components/loading";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { apiCall, GET_COMIC_CHARACTERS, GET_COMIC_INFO } from "utils/api";
import { dateParser } from "utils/utils";
import "./index.scss";

const Comic = () => {
  const { id } = useParams();
  const [comicInfo, setComicInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiCall(`${GET_COMIC_INFO}${id}`).then((res) => {
      if (res.error) {
        setError(true);
      } else {
        setComicInfo(res.results[0]);
      }
      setLoading(false);
    });
  }, [id]);

  const handleShowCharacters = () => {
    apiCall(`${GET_COMIC_CHARACTERS.replace("{id}", id)}`).then((res) => {
      setComicInfo({ ...comicInfo, parsedCharacters: res.results });
    });
  };

  if (error) {
    return <ErrorPage />;
  }

  const {
    title,
    images,
    description,
    dates = [],
    pageCount,
    parsedCharacters = [],
    characters = {},
  } = comicInfo;

  const onsaleDate = dates.find((d) => d.type === "onsaleDate");
  const mustShowCharacters = characters.returned > 0;

  return loading ? (
    <Loading />
  ) : (
    <div className="comicInfo">
      {images && images[0] && (
        <img
          alt={title}
          src={`${images[0].path}.${images[0].extension}`}
          width="300"
        />
      )}
      <div className="descriptionContainer">
        <h1>{title}</h1>
        {description && <p>{description}</p>}
        {onsaleDate && dateParser(onsaleDate.date) && (
          <p>PUBLISH DATE: {dateParser(onsaleDate.date)}</p>
        )}
        {pageCount > 0 && <span>PAGES: {pageCount}</span>}
        <br />
        {mustShowCharacters && (
          <Characters
            characters={parsedCharacters}
            handleShowCharacters={handleShowCharacters}
          />
        )}
      </div>
    </div>
  );
};

export default Comic;

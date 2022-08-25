import md5 from "md5";

export const GET_COMICS = "/v1/public/comics";
export const GET_COMIC_INFO = "/v1/public/comics/";
export const GET_COMIC_CHARACTERS = "/v1/public/comics/{id}/characters";

const createFilter = (filter = {}) => {
  let filterString = "";
  Object.keys(filter).forEach((key) => {
    if (filter[key]) {
      filterString += `&${key}=${filter[key]}`;
    }
  });
  return filterString;
};

const getURL = (query, filter) => {
  const ts = new Date().getTime();
  const stringToHash =
    ts + process.env.REACT_APP_PRIVATE_KEY + process.env.REACT_APP_PUBLIC_KEY;
  const hash = md5(stringToHash);
  const baseUrl = `${process.env.REACT_APP_BASE_URL}${query}`;

  return (
    baseUrl +
    "?ts=" +
    ts +
    "&apikey=" +
    process.env.REACT_APP_PUBLIC_KEY +
    "&hash=" +
    hash +
    createFilter(filter)
  );
};

export const apiCall = async (url, filter) => {
  return await fetch(getURL(url, filter))
    .then((res) => {
      return res.json();
    })
    .then(({ data }) => {
      if (!data) {
        throw new Error();
      }
      return data;
    })
    .catch(() => {
      return { error: true };
    });
};

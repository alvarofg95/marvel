import TYPES from "redux/actionTypes";

export const actionSetComicsList = (list) => {
  return {
    type: TYPES.SET_COMICS_LIST,
    value: list,
  };
};

export const actionSetFilter = (filter) => {
  return {
    type: TYPES.SET_FILTER,
    ...filter,
  };
};

export const actionSetPage = (page) => {
  return {
    type: TYPES.SET_PAGE,
    page,
  };
};

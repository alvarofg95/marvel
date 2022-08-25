import TYPES from "redux/actionTypes";

const initialState = {
  list: [],
  page: 1,
  filter: {
    orderBy: "title",
    sort: "ascending",
    offset: 0,
    format: "comic",
  },
  load: true,
  error: false,
};

const comics = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_COMICS_LIST:
      console.log({ action });
      return {
        ...state,
        list: action.value.results,
        total: action.value.total,
        filter: {
          ...state.filter,
          offset: action.value.offset,
        },
        load: false,
        error: action.value.error,
      };
    case TYPES.SET_FILTER: {
      const { key } = action;
      if (key === "orderBy") {
        return {
          ...state,
          filter: { ...state.filter, [action.key]: action.value },
          load: true,
        };
      } else if (key === "titleStartsWith") {
        const updatedState = { ...state, load: true };
        if (action.value) {
          updatedState.filter.titleStartsWith = action.value;
        } else {
          delete updatedState.filter.titleStartsWith;
        }
        return updatedState;
      } else if (key === "sort") {
        return {
          ...state,
          filter: {
            orderBy:
              action.value === "descending"
                ? `-${state.filter.orderBy}`
                : state.filter.orderBy.replace("-", ""),
            sort: action.value,
          },
          load: true,
        };
      }
      return state;
    }
    case TYPES.SET_PAGE:
      let page = state.page;
      if (action.page === "next" && state.filter.offset + 20 <= state.total) {
        page += 1;
      } else if (action.page === "previous" && state.page > 1) {
        page -= 1;
      }
      const offset =
        page * 20 <= state.total ? page * 20 : state.total - page * 20;
      return {
        ...state,
        filter: { ...state.filter, offset },
        page,
        load: true,
      };
    default:
      return state;
  }
};

export default comics;

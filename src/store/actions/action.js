import * as actionTypes from "./types";

export const setChartOption = (id) => {
  return {
    type: actionTypes.SET_CHART_OPTION,
    payload: {
      chartOptionId: id,
    },
  };
};

export const setPage = (page) => {
  return {
    type: actionTypes.SET_PAGE,
    payload: {
      page: page,
    },
  };
};

export const setPlanets = (planets) => {
  return {
    type: actionTypes.SET_PLANETS,
    payload: {
      planets: planets,
    },
  };
};

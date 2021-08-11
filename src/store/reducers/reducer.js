import { combineReducers } from "redux";
import * as actionTypes from "../actions/types";

const initBarChart = {
  selChartOption: "population",
};

const barchart_reducer = (state = initBarChart, action) => {
  switch (action.type) {
    case actionTypes.SET_CHART_OPTION:
      return {
        ...state,
        selChartOption: action.payload.chartOptionId,
      };
    default:
      return state;
  }
};

const initTable = {
  selPage: 0,
};

const table_reducer = (state = initTable, action) => {
  switch (action.type) {
    case actionTypes.SET_PAGE:
      return {
        ...state,
        selPage: action.payload.page,
      };
    default:
      return state;
  }
};

const initPlanets = {
  planets: [],
};

const planets_reducer = (state = initPlanets, action) => {
  switch (action.type) {
    case actionTypes.SET_PLANETS:
      return {
        ...state,
        planets: action.payload.planets,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  barchart: barchart_reducer,
  table: table_reducer,
  planets: planets_reducer,
});

export default rootReducer;

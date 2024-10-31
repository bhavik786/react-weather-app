// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weatherSlice";

/**
 * The Redux store configuration for the application.
 * This store holds the global state of the application,
 * including the weather data managed by the weather reducer.
 */
const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

export default store;

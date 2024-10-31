import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getWeatherData } from "../api/weatherService";

// Async thunk for fetching weather data
export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city, { rejectWithValue }) => {
    try {
      const data = await getWeatherData(city);
      return data;
    } catch (error) {
      return rejectWithValue("City not found or API error.");
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    city: "",
    weatherData: null,
    error: "",
    loading: false,
  },
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true; // Set loading to true when the fetch starts
        state.error = ""; // Clear any previous error
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.weatherData = action.payload;
        state.loading = false; // Set loading to false when fetch is successful
        state.error = ""; // Clear error on successful fetch
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false; // Set loading to false when fetch fails
        state.error = action.payload; // Set error message
        state.weatherData = null; // Clear previous weather data
      });
  },
});

export const { setCity } = weatherSlice.actions;

export default weatherSlice.reducer;

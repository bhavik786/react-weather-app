import React, { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import Skeleton from "react-loading-skeleton";
import { setCity, fetchWeather } from "./store/weatherSlice";
import Fab from "@mui/material/Fab";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import toast from "react-hot-toast";

// Lazy loading components for better performance
const WeatherSummary = lazy(() => import("./components/WeatherSummary"));
const WeatherDetails = lazy(() => import("./components/WeatherDetails"));

// Modal styling
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};
function App() {
  const dispatch = useDispatch();
  const { city, weatherData, error, loading } = useSelector(
    (state) => state.weather
  );

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (e) => dispatch(setCity(e.target.value));

  const handleFetchWeather = () => {
    if (city.trim()) {
      dispatch(fetchWeather(city));
    } else {
      toast.error("Please enter a city name.");
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <div className="bg-twilight-glow bg-w-7xl  p-8 shadow-lg space-y-8 h-screen">
      <Header
        city={city}
        onInputChange={handleInputChange}
        onSearch={handleFetchWeather}
      />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" xl={{ mt: 2 }}>
            Hello team, my name is Bhavik Gevariya, and I developed this weather
            app as part of the interview process, following the specifications
            outlined in the provided documentation. The app offers real-time
            weather information for cities worldwide. I utilized Material-UI
            (MUI) for UI components and Tailwind CSS for custom styling. For
            efficient state management, I implemented Redux, which ensures
            smooth user interactions. Notifications are handled through Toaster,
            providing timely alerts for user actions and error messages. The app
            fetches accurate weather data from the OpenWeather API, delivering
            detailed weather summaries and insights to users. Additionally, I
            deployed the app to Netlify for easy access and demonstration.
          </Typography>
        </Box>
      </Modal>

      {weatherData ? (
        <>
          <Suspense fallback={<Skeleton height={200} />}>
            <WeatherSummary weatherData={weatherData} isLoading={loading} />
          </Suspense>

          <Suspense fallback={<Skeleton height={300} />}>
            <WeatherDetails weatherData={weatherData} isLoading={loading} />
          </Suspense>
        </>
      ) : (
        <>
          <h1 className="text-center space-y-2">Please Enter a city name</h1>
        </>
      )}

      <Fab
        variant="extended"
        sx={{
          position: "absolute",
          bottom: 16,
          right: 16,
        }}
        color="white"
        onClick={handleOpen}
      >
        <HelpOutlineIcon sx={{ mr: 1 }} />
        Info
      </Fab>
    </div>
  );
}

export default App;

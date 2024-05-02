import axios from "axios";
import "./App.css";
import Home from "./pages/Home";
import MainContextProvider from "./Context/Context";
import Router from "./router/Router";

function App() {
  axios.defaults.baseURL = "http://localhost:3000";
  axios.defaults.withCredentials = true;
  return (
    <MainContextProvider>
      <Router />
     <Home />
    </MainContextProvider>
  );
}

export default App;

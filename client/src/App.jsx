import axios from "axios";
import "./App.css";
import Home from "./pages/Home";
import MainContextProvider from "./Context/Context";
import Router from "./router/Router";
import QuizContextProvider from "./Context/QuizContext";

function App() {
  axios.defaults.baseURL = "http://localhost:3000";
  axios.defaults.withCredentials = false;
  return (
    <MainContextProvider>
      <QuizContextProvider>
        <Router />
      </QuizContextProvider>
    </MainContextProvider>
  );
}

export default App;

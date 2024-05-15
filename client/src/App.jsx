import axios from "axios";
import "./App.css";
import Home from "./pages/Home";
import MainContextProvider from "./Context/Context";
import Router from "./router/Router";
import QuizContextProvider from "./Context/QuizContext";
import AuthContextProvider from "./Context/AuthContext";

function App() {
  axios.defaults.baseURL = "http://192.168.99.204:3000";
  axios.defaults.withCredentials = true;
  return (
    <MainContextProvider>
      <AuthContextProvider>
        <QuizContextProvider>
          <Router />
        </QuizContextProvider>
      </AuthContextProvider>
    </MainContextProvider>
  );
}

export default App;

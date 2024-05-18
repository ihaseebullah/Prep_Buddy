import axios from "axios";
import "./App.css";
import Home from "./pages/Home";
import MainContextProvider from "./Context/Context";
import Router from "./router/Router";
import QuizContextProvider from "./Context/QuizContext";
import AuthContextProvider from "./Context/AuthContext";
import ResultsContextProvider from "./Context/ResultsContext";

function App() {
  axios.defaults.baseURL = "http://localhost:3000";
  axios.defaults.withCredentials = true;
  return (
    <MainContextProvider>
      <AuthContextProvider>
        <QuizContextProvider>
          <ResultsContextProvider>
            <Router />
          </ResultsContextProvider>
        </QuizContextProvider>
      </AuthContextProvider>
    </MainContextProvider>
  );
}

export default App;

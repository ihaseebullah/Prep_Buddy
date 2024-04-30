import axios from "axios";
import "./App.css";
import Test from "./components/Test";

function App() {
  axios.defaults.baseURL = "http://localhost:3000";
  axios.defaults.withCredentials = true;
  return (
    <>
      <Test />
    </>
  );
}

export default App;

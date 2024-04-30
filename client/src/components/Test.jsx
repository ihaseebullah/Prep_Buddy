import { useState } from "react";
import axios from "axios";
export default function Test() {
  const [serverResponse, setServerResponse] = useState("Loading...");
  axios.get("/").then((res) => {
    setServerResponse(res.data.message);
  });
  return <h1>{serverResponse}</h1>;
}

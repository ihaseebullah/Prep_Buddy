import React, { createContext, useContext, useState } from "react";
export const ResultContext = createContext();
export default function ResultsContextProvider({ children }) {
  const [quizResult, setQuizResult] = useState();
  return (
    <ResultContext.Provider value={{ quizResult, setQuizResult }}>
      {children}
    </ResultContext.Provider>
  );
}

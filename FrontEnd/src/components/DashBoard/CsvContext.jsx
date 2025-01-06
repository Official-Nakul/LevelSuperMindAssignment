import { createContext, useState } from "react";

// Create Context
export const CsvContext = createContext();

export function CsvProvider({ children }) {
  const [csvData, setCsvData] = useState([]);
  const [fileName, setFileName] = useState("");

  const updateCsvData = (data, name) => {
    setCsvData(data);
    setFileName(name);
  };

  return (
    <CsvContext.Provider value={{ csvData, fileName, updateCsvData }}>
      {children}
    </CsvContext.Provider>
  );
}

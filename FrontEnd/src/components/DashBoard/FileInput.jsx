import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { useState, useContext } from "react";
import { CsvContext } from "./CsvContext";
import Papa from "papaparse";
import Upload from "../../assets/upload.svg";
import FileIcon from "../../assets/CSVicon.png";

export function InputFile() {
  // const [fileData, setFileData] = useState([]);
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState(null);

  const { updateCsvData } = useContext(CsvContext);

  const handleFile = (file) => {
    if (file.type !== "text/csv") {
      setError("Please upload a valid CSV file.");
      // setFileData([]);
      setFileName("");
      return;
    }

    setError(null);
    // setFileName(file.name); // Store the file name

    const reader = new FileReader();
    reader.onload = (e) => {
      Papa.parse(e.target.result, {
        complete: (result) => {
          updateCsvData(result.data, file.name);
          //setFileData(result.data); // Update state with parsed data
          //localStorage.setItem("csvData", JSON.stringify(result.data)); // Store in localStorage
          sessionStorage.setItem("csvData", JSON.stringify(result.data)); // Or use sessionStorage
        },
        header: true,
        skipEmptyLines: true,
        error: () => {
          setError("Failed to parse CSV file");
        },
      });
    };
    reader.readAsText(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleFile(file);
    }
  };

  return (
    <Card
      className="w-full h-full flex flex-col justify-center items-center gap-4 "
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <CardHeader>
        <h2 className="text-2xl font-semibold text-center">Upload CSV File</h2>
      </CardHeader>
      <CardContent className="flex flex-col justify-center items-center p-0">
        <img src={Upload} alt="Upload Icon" className=" h-[10rem]" />
        <p className="text-gray-600">Drag & Drop your CSV file here</p>
        <p className="text-sm text-gray-500">or</p>
      </CardContent>
      <CardFooter>
        <Input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          className="mt-2"
        />

        {error && (
          <div className="text-red-500 text-sm text-center mb-4">{error}</div>
        )}

        {/* Display the file name and icon after successful upload */}
        {fileName && (
          <div className="mt-2 flex items-center">
            <img src={FileIcon} alt="File Icon" className="mr-4 h-[2rem]" />
            <span className="text-gray-700">{fileName}</span>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}

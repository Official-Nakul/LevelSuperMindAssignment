import { useEffect, useContext } from "react";
import { CsvContext } from "./CsvContext";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function FileDisplay() {
  const { csvData, fileName } = useContext(CsvContext);
  useEffect(() => {
    // Retrieve the data from sessionStorage
  }, []);
  console.log(csvData, fileName);
  return (
    <>
      {csvData.length > 0 ? (
        <Table className=" bg-background">
          <TableHeader>
            <TableRow>
              {Object.keys(csvData[0]).map((key) => (
                <TableHead className="w-[100px] font-bold" key={key}>
                  {key}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {csvData.map((row, index) => (
              <TableRow key={index}>
                {Object.values(row).map((value, idx) => (
                  <TableCell key={idx}>{value}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <Card className=" h-full w-full flex justify-center items-center">
          <CardContent className=" h-full w-full flex justify-center items-center p-4 font-bold text-red-500">
            Please upload file
          </CardContent>
        </Card>
      )}
    </>
  );
}

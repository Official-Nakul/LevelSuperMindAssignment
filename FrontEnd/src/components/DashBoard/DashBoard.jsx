import { BarChartComp } from "./BarChartComp";
import { PieChartComp } from "./PieChartComp";
import { InputFile } from "./FileInput";
import { FileDisplay } from "./FileDisplay";
import { CsvProvider } from "./CsvContext";
function DashBoard() {
  return (
    <>
      <div className="flex flex-1 flex-col gap-4">
        <CsvProvider>
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className=" rounded-xl bg-muted/50">
              <BarChartComp />
            </div>
            <div className=" rounded-xl bg-muted/50">
              <PieChartComp />
            </div>
            <div className=" rounded-xl bg-muted/50 h-full flex justify-center items-center">
              <InputFile />
            </div>
          </div>
          <div className="min-h-full flex-1 rounded-xl bg-muted/50 md:min-h-min">
            <FileDisplay />
          </div>
        </CsvProvider>
      </div>
    </>
  );
}

export default DashBoard;

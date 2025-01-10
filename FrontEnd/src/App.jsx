import "./App.css";
import Page from "./components/Layout/Page";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className=" flex flex-col gap-4">
      <Header />
      <Page />
    </div>
  );
}

export default App;

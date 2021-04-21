import "./App.css";
import Header from "./Components/Header/Header";
import Table from "./Components/Table/Table";

function App() {
  return (
    <div className="App">
      <div className="header-container">
        <Header />
      </div>
      <div className="graph-container">
        <div className="pie-chart1">
        </div>
        <div className="pie-chart2"></div>
        <div className="graph"></div>
      </div>
      <div className="table-container">
        <div className="calendar"></div>
        <div className="table">
          <Table />
        </div>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Calendars from "./Components/Calendar/Calendar";
import Graph from "./Components/Graph/Graph";
import Header from "./Components/Header/Header";
import PieChart from "./Components/PieChart/PieChart";
import Table from "./Components/Table/Table";

function App() {
  return (
    <div className="App">
      <div className="header-container">
        <Header />
      </div>
      <div className="graph-container">
        <div className="pie-chart1">
          <PieChart
            label={["#item1", "#item2", "#item3", "#item4"]}
            serie={[44, 55, 15, 40]}
            text="Conversion"
          />
        </div>
        <div className="pie-chart2">
          <PieChart
            label={["cat#1", "cat#2", "cat#3", "cat#4"]}
            serie={[50, 55, 85, 15]}
            text="Users"
          />
        </div>
        <div className="graph">
          <Graph />
        </div>
      </div>
      <div className="table-container">
        <div className="calendar">
          <Calendars />
        </div>
        <div className="table">
          <Table />
        </div>
      </div>
    </div>
  );
}

export default App;

import LineChart1 from "./component/LineChart1"
import LineChart2 from "./component/LineChart2"
import './App.css';
import PieChart from "./component/PieChart";
import BarChart1 from "./component/BarChart1";
import BarChart2 from "./component/BarChart2";
import GaugeChart from "./component/GaugeChart";
import Heatmap from "./component/Heatmap";
import RadarChart from "./component/RadarChart";
import HistogramChart from "./component/HistogramChart";





function App() {
  return(
    <>
    <LineChart1/>
    <BarChart1/>
    <PieChart/>
    <HistogramChart/>
    <BarChart2/>
    <LineChart2/>
    <GaugeChart/>
    <Heatmap/>
    <RadarChart/>
    </>
  )
}

export default App;

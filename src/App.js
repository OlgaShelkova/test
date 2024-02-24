import './App.css';
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 3],
  ["Eat", 2],
  ["Rest", 4],
  ["Study", 8],
  ["Sleep", 8],
];

export const options = {
  title: "My Daily Activities",
};
 
function App() {
  return (
    <div className="App">
      <Chart
    chartType="PieChart"
    data={data}
    options={options}
    width={"100%"}
    height={"550px"}
/>
    </div>
  );
}

export default App;

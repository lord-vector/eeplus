import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import PieChartComponent from "./components/PieChart";
import BarGraphComponent from "./components/BarGraph";
import LineGraphComponent from "./components/LineGraph";
import TreemapComponent from "./components/Treemap";

const Home = () => (
  <h1>
    Welcome to the Energy Consumption Tracking and Analysis Platform, please use
    Navigations to see the Graphs
  </h1>
);
const Contact = () => <h1>Contact Us</h1>;

const App = () => {
  return (
    <Router>
      <Navbar />
      <div
        style={{
          padding: "20px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/barGraph" element={<BarGraphComponent />} />
          <Route path="/pieChart" element={<PieChartComponent />} />
          <Route path="/lineGraph" element={<LineGraphComponent />} />
          <Route path="/treemap" element={<TreemapComponent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

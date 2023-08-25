import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

const LineGraph = () => {
  const [casesData, setCasesData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCasesData() {
      try {
        const response = await axios.get(
          "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
        );
        setCasesData(response.data);
        console.log(response.data);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchCasesData();
  }, []);

  const cases = casesData?.cases || {}; // Access cases data safely
  const labels = Object.keys(cases);
  const data = Object.values(cases);
  console.log(data);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Confirmed Cases",
        data: data,
        fill: true,
        borderColor: "#FF5733",
        backgroundColor: "rgba(255, 87, 51, 0.2)",
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Number of Cases",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div className="bg-white mt-40 p-4 rounded-lg shadow-md mb-28 h-full  ">
      <h2 className="text-xl font-semibold mb-4 ">
        COVID-19 Cases Fluctuations
      </h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="h-96  bg-black">
          <Line data={chartData} options={chartOptions} />
        </div>
      )}
    </div>
  );
};

export default LineGraph;

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Legend, Title } from "chart.js";

ChartJS.register(ArcElement, Legend, Title);

interface ChartProps {
  title: string;
  labels: string[];
  data: number[];
}

const DoughnutChart = ({ title, labels, data }: ChartProps) => {
  const chartOptions = {
    plugins: {
      title: {
        display: true,
        text: title,
      },
    },
  };

  const chartData = {
    labels: labels,

    datasets: [
      {
        label: "My First Dataset",
        data: data,
        backgroundColor: ["rgb(255, 99, 132)", "rgb(255, 205, 86)"],
        hoverOffset: 4,
      },
    ],
  };

  return <Doughnut data={chartData} options={chartOptions} />;
};

export default DoughnutChart;

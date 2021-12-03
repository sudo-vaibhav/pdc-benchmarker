import { InitBenchmarkState } from "..";
import { Bar } from "react-chartjs-2";
// import { useWindowSize } from "@react-hook/window-size";

const Results = ({ state }: { state: InitBenchmarkState }) => {
  // const [width, height] = useWindowSize();

  const data = {
    labels: ["Serial", "Parallel"],
    datasets: [
      {
        label: "Performance Comparison",
        data: [state.result?.serial, state.result?.parallel],
        fill: false,
        backgroundColor: "rgb(60, 130, 246)",
        borderColor: "rgba(60, 130, 246,0.2)",
      },
    ],
  };

  // const options = {

  // };
  return state.result ? (
    <div className="pb-16">
      {/* @ts-ignore */}
      <Bar
        data={data}
        options={{
          indexAxis: "y",
          responsive: true,
          plugins: {
            legend: {
              labels: {
                color: "white",
              },
            },
          },
          scales: {
            yAxes: {
              ticks: {
                color: "white",
              },
            },

            xAxis: {
              ticks: {
                color: "white",
              },
              beginAtZero: true,
            },
          },
        }}
        className="w-3/4 max-h-80"
      />

      {/* {JSON.stringify(state.sysResourcesArray)} */}
      {/* <br />
      {JSON.stringify(state.sysResourcesArray.length)} */}
    </div>
  ) : null;
};

export default Results;

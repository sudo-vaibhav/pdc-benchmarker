import { useState, useEffect } from "react";
import { Socket } from "socket.io-client";
import Button from "../../components/Button";
import Knobs from "./Knobs";
import Results from "./Results";
import Sidebar from "./Sidebar";
import WorkLoadCards from "./WorkLoadCards";

export interface SysResources {
  cpu: number;
  ram: number;
}
const initBenchmarkState = {
  sysDetails: {
    processCount: 0,
  },
  // sysResources: {
  //   ram: 0,
  //   cpu: 0,
  // },
  benchmark: {
    processCount: 1,
    datasetSize: 20,
    workLoad: "Image Processing",
    maximumDatasetSize: 20,
  },
  processing: false,
  result: null as {
    serial: number;
    parallel: number;
  } | null,
  // sysResourcesArray: [] as SysResources[],
};
export type InitBenchmarkState = typeof initBenchmarkState;
export type SetBenchmarkState = React.Dispatch<
  React.SetStateAction<InitBenchmarkState>
>;

const Dashboard = ({ socket }: { socket: Socket }) => {
  const [state, setState] = useState(initBenchmarkState);
  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket);
      console.log("connected");
    });

    socket.on("sys-details", (m) => {
      setState((oldState) => ({
        ...oldState,
        sysDetails: m,
      }));
    });

    setInterval(() => {
      socket.emit("request-sys-resources");
    }, 300);
    socket.on("benchmark-result", (m) => {
      console.log("benchmark result", m);
      setState((oldState) => ({
        ...oldState,
        result: m,
        processing: false,
      }));
    });
  }, [socket]);

  return (
    <div className="min-h-screen grid grid-cols-4">
      <div className=" h-screen overflow-y-auto col-span-3">
        <div className="lg:px-8 flex flex-col  space-y-16 pt-6">
          <WorkLoadCards state={state} setState={setState} />
          <Knobs state={state} setState={setState} />
          <div>
            <Button
              text="Run Benchmark"
              disabled={state.processing}
              onClick={() => {
                setState((oldState) => ({
                  ...oldState,
                  result: null,
                  processing: true,
                  sysResourcesArray: [],
                }));
                socket.emit("run-benchmark", state.benchmark);
              }}
            />
          </div>
          <Results state={state} />
        </div>
      </div>
      <Sidebar
      // setState={setState}
      />
    </div>
  );
};

export default Dashboard;

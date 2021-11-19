import { InitBenchmarkState, SetBenchmarkState } from "..";
import Knob from "../../../components/Knob";
import approx from "approximate-number";
import Heading from "../../../components/Heading";
const Knobs = ({
  state,
  setState,
}: {
  state: InitBenchmarkState;
  setState: SetBenchmarkState;
}) => {
  return (
    <div>
      <Heading text="Hyperparameters" />
      <div className="flex space-x-20">
        <Knob
          numTicks={state.sysDetails.processCount}
          min={1}
          max={state.sysDetails.processCount}
          value={1}
          color={true}
          onChange={(v: number) => {
            setState((oldState) => ({
              ...oldState,
              benchmark: {
                ...oldState.benchmark,
                processCount: v,
              },
            }));
          }}
          text={`Processes : ${state.benchmark.processCount}`}
        />
        <Knob
          numTicks={10}
          min={1}
          max={state.benchmark.maximumDatasetSize}
          value={1}
          color={true}
          onChange={(v: number) => {
            setState((oldState) => ({
              ...oldState,
              benchmark: {
                ...oldState.benchmark,
                datasetSize: v,
              },
            }));
          }}
          text={`Dataset Size : ${approx(
            state.benchmark.datasetSize
          ).toUpperCase()}`}
        />
      </div>
    </div>
  );
};

export default Knobs;

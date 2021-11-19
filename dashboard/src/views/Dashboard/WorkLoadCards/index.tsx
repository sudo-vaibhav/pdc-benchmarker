import { InitBenchmarkState, SetBenchmarkState } from "..";
import Heading from "../../../components/Heading";
import WorkLoadCard from "./WorkLoadCard";

const WorkLoadCards = ({
  state,
  setState,
}: {
  state: InitBenchmarkState;
  setState: SetBenchmarkState;
}) => {
  return (
    <div>
      <Heading text="Workload" className="mb-8" />
      <div className="flex space-x-2">
        {[
          {
            heading: "Word Count",
            description:
              "A classic problem of distributed computing which generates random lines of text and counts the number of occurrences of each word in the text",
            maximumDatasetSize: 15000,
          },
          {
            heading: "Image Processing",
            description:
              "Takes a given number of huge images, and applies a gaussian blur on them which is a highly CPU bound process. Multiprocessing can be used here.",
            maximumDatasetSize: 20,
          },
        ].map((i) => {
          return (
            <WorkLoadCard
              selected={state.benchmark.workLoad === i.heading}
              heading={i.heading}
              description={i.description}
              setWorkLoad={(w) => {
                setState((oldState) => ({
                  ...oldState,
                  benchmark: {
                    ...oldState.benchmark,
                    workLoad: w,
                    maximumDatasetSize: i.maximumDatasetSize,
                  },
                }));
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkLoadCards;

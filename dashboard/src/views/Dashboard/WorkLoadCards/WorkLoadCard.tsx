import CheckIcon from "remixicon-react/CheckLineIcon";
import Card from "../../../components/Card";
const WorkLoadCard = ({
  heading,
  description = "",
  selected,
  setWorkLoad,
}: {
  heading: string;
  description?: string;
  selected?: boolean;
  setWorkLoad: (workLoad: string) => void;
}) => {
  return (
    <Card
      onClick={() => {
        setWorkLoad(heading);
      }}
      className="cursor-pointer flex flex-col justify-between w-1/3"
    >
      <div>
        <h3 className="text-title-4 text-white">{heading}</h3>
        <p className="text-white mt-2 text-body-3">{description}</p>
      </div>
      <div className="mt-4 font-bold text-title-7">
        {selected ? (
          <span className="text-white flex items-center">
            SELECTED
            <CheckIcon className="ml-2" />
          </span>
        ) : (
          <span className="text-blue-400">SELECT</span>
        )}
      </div>
    </Card>
  );
};

export default WorkLoadCard;

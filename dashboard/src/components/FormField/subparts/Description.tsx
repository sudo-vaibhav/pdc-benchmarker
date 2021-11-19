import { FormFieldTypes } from "..";

const Description = ({
  description = "",
  value,
}: // type,
{
  // type?: FormFieldTypes;
  description: string;
  value: string;
}) => {
  return description ? (
    <div className="text-white text-body-3 my-2 max-w-xs">{description}</div>
  ) : null;
};

export default Description;

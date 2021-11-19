import { MouseEventHandler } from "react";

const Button = ({
  onClick,
  text,
  disabled = false,
}: {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  text: string;
  disabled?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="bg-blue-800 hover:bg-blue-dark text-white font-bold p-4 rounded disabled:opacity-75 disabled:cursor-not-allowed"
    >
      {disabled ? "Processing..." : text}
    </button>
  );
};

export default Button;

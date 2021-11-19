const Card = ({
  className,
  children,
  onClick = () => {},
}: {
  className: string;
  children: any;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={`${className} p-4 border-2 border-blue-500 bg-gray-800  rounded-large"
    `}
    >
      {children}
    </div>
  );
};

export default Card;

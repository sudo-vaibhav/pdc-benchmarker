const Heading = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => {
  return (
    <h2
      className={`uppercase mb-8 text-white font-bold text-title-3 ${className}`}
    >
      {text}
    </h2>
  );
};

export default Heading;

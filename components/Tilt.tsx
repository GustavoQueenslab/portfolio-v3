import clsx from "clsx";
import Title from "react-vanilla-tilt";
interface TiltProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Tilt({ className, children }: TiltProps) {
  return (
    <Title
      className={clsx(className, "px-8 py-4 bg-white rounded-md")}
      style={{}}
      options={{ reverse: true }}
    >
      {children}
    </Title>
  );
}

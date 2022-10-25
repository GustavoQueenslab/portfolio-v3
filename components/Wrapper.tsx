import { clsx } from "clsx";
interface WrapperProps {
  children?: React.ReactNode;
  className?: String;
}

export default function Wrapper({ children, className = "" }: WrapperProps) {
  return (
    <div className={clsx("w-full py-10 bg-secondary", className)}>
      {children}
    </div>
  );
}

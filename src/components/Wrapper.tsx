import { clsx } from "clsx";
interface WrapperProps {
  children?: React.ReactNode;
  className?: String;
  id?: string;
}

export default function Wrapper({
  children,
  className = "",
  id = "",
}: WrapperProps) {
  return (
    <div className={clsx(className, "w-full py-10 bg-secondary")} id={id}>
      {children}
    </div>
  );
}

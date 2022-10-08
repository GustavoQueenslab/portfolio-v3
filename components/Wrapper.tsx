interface WrapperProps {
  children?: React.ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
  return <div className="w-full px-24 py-10 bg-secondary">{children}</div>;
}

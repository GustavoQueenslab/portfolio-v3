import React from "react";
import Navbar from "./navbar";

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen p-8 bg-primary">{children}</div>
    </>
  );
}

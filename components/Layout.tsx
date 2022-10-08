import React from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-primary">{children}</div>
    </>
  );
}

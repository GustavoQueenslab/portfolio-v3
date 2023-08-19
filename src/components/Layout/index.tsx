import React from "react";

import clsx from "clsx";

import Navbar from "../Navbar";

interface LayoutProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Layout({ children, className }: LayoutProps) {
  return (
    <>
      <Navbar />
      <div className={clsx("w-full min-h-screen bg-primary", className)}>
        {children}
      </div>
    </>
  );
}

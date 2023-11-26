"use client";

import { useEffect, useContext } from "react";

import Sidebar from "./_presenter/Sidebar";

import { SidebarContext } from "@/app/provider/SidebarProvider";

export default function Container({ children }: { children: React.ReactNode }) {
  const { isOpen } = useContext(SidebarContext);

  useEffect(() => {
    const setFillHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    // Call setFillHeight to set initial height
    setFillHeight();

    // Define the resize event handler
    const onResize = () => {
      // Use a closure to store the previous width
      let previousWidth = window.innerWidth;

      return () => {
        if (window.innerWidth !== previousWidth) {
          // Only set fill height if width changes
          setFillHeight();
          previousWidth = window.innerWidth;
        }
      };
    };

    // Add event listener
    const handleResize = onResize();
    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`
      ${"grid transition-all duration-500 ease-in-out"}
      ${
        isOpen
          ? "grid-cols-[300px_1fr]"
          : "grid-cols-[0px_1fr] lg:grid-cols-[200px_1fr]"
      }
    `}
    >
      <Sidebar />
      {children}
    </div>
  );
}

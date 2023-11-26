"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [vh, setVh] = useState(0);

  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    setVh(vh);
  }, []);

  return (
    <div className="flex">
      <h1>Responsive test</h1>
      <hr />
      <p>vh: {vh}</p>
    </div>
  );
}

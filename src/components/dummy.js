import React, { useState, useEffect } from "react";

export default function Dummy({ data, children }) {
  const [first, setfirst] = useState("");

  return <div></div>;
}

export function Dummy2({ data, children }) {
  return <div></div>;
}

export function Dummy3({ data, children }) {
  const [first, setfirst] = useState("");

  return <div></div>;
}

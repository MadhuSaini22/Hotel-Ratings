import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Popular from "./Popular";

export default function Main() {
  return (
    <div className="container">
      <Hero />
      <Popular />
    </div>
  );
}

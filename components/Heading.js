import React from "react";

export default function Heading({ heading}) {
  return (
    <div>
      <h2 className="text-2xl mx-3  font-bold lg:text-3xl my-3 text-black">
        {heading}
      </h2>
    </div>
  );
}

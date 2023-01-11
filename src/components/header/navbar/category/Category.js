import React, { useState } from "react";

const categories = [
  "Barricade Lights",
  "Road Safety Signs",
  "Bollard Post",
  "Cones Road Safety",
  "Rubber Safety Traffic",
  "Caution Billboards",
  "Safety Delineators",
  "Strobe Police Light ",
  "Emergency Kit",
  "Barriers",
  "Parking Lot",
  "Construction Road Safety",
  "Floating Pot",
  "Baby Playpen Fence",
  "LED Bulb",
];

export default function Category() {
  // set false by default
  const [category, setcategory] = useState(true);
  function handleCategory() {
    setcategory(!category);
  }

  return (
    <div className="w-72 relative">
      <button
        onClick={handleCategory}
        type="button"
        className="w-full bg-gray-50/5 py-1 px-4 rounded-lg font-medium text-left flex items-center justify-between hover:bg-gray-50/10"
      >
        <span>Category</span>
        {category ? (
          <i className="fa fa-angle-up my-1"></i>
        ) : (
          <i className="fa fa-angle-down my-1"></i>
        )}
      </button>

      {category ? (
        <div className="w-full absolute left-0 top-10 p-2 bg-white text-gray-900 flex flex-col gap-1 rounded-lg border-b-4 border-navy shadow-lg z-[101]">
          {categories.map((e, i) => (
            <CItem to="/" key={e + i}>
              {e}
            </CItem>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export function CItem({ to, children }) {
  return (
    <a
      href={to}
      className="block w-full py-2 rounded-lg hover:bg-alice-blue px-4 font-medium text-navy"
    >
      {children}
    </a>
  );
}

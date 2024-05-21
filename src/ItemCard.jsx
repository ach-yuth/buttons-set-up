import React from "react";

export default function ItemCard({ item }) {
  return (
    <div className="items-container">
      <li>{item}</li>
    </div>
  );
}

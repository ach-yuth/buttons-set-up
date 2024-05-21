import React from "react";
import ItemCard from "../ItemCard";
import { content } from "../Data/Content";

export default function Buttons({ activeIndex, setActiveIndex }) {
  return (
    <div className="item-container">
      <div className="btns-container">
        <button
          className={activeIndex === 0 ? "active" : ""}
          onClick={() => {
            setActiveIndex(0);
          }}
        >
          Why React?
        </button>
        <button
          className={activeIndex === 1 ? "active" : ""}
          onClick={() => {
            setActiveIndex(1);
          }}
        >
          Core Features
        </button>
        <button
          className={activeIndex === 2 ? "active" : ""}
          onClick={() => {
            setActiveIndex(2);
          }}
        >
          Related Resources
        </button>
      </div>
      <div className="items-container">
        {activeIndex !== null &&
          content[activeIndex].map((item, idx) => (
            <ul key={idx}>
              <ItemCard item={item} />
            </ul>
          ))}
      </div>
    </div>
  );
}

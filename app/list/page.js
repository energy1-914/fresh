"use client";
import { useState } from "react";

export default function List() {
  let item = ["tomato", "pasta", "coconut"];
  let [count, setCount] = useState([0, 20, 10]);
  return (
    <div>
      <h4 className="title">상품 목록</h4>

      {item.map((a, i) => {
        return (
          <div className="food" key={i}>
            <img src={`/food${i}.png`} className="food-img" />
            <h4>{a} $30</h4>
            <span>{count[i]}</span>
            <button
              onClick={() => {
                let copy = [...count];
                copy[i]++;
                setCount(copy);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                let copy = [...count];
                copy[i]--;
                setCount(copy);
              }}
            >
              -
            </button>
          </div>
        );
      })}
    </div>
  );
}

import Image from "next/image";
import food from "/public/food0.png";

export default function List() {
  let item = ["tomato", "coconut", "orange"];
  return (
    <div>
      <h4 className="title">상품 목록</h4>

      {item.map((a, i) => {
        return (
          <div className="food" key={i}>
            <img src={`/food${i}.png`} className="food-img" />
            <h4>{a} $30</h4>
          </div>
        );
      })}
    </div>
  );
}

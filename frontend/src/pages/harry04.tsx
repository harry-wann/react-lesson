import "./harry.css";
import { useState } from "react";

type Props = {
  name: string;
  price: number;
};

function OrderCard({ name, price }: Props) {
  const [cups, setCups] = useState(0);

  function addOne() {
    setCups((cups) => cups + 1);
  }

  return (
    <>
      <article className="card">
        <div>品項: {name}</div>
        <div>價格: ${price}</div>
        <button onClick={addOne}>買一杯</button>
        <div>共買幾杯: {cups}</div>
      </article>
    </>
  );
}

export default function App() {
  return <OrderCard name="Latte v3" price={100} />;
}

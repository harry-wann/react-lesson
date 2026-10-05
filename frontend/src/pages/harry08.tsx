import "./harry.css";
import { useState, useEffect, useCallback } from "react";

type OrderType = {
  id: number;
  name: string;
  cups: number;
  price: number;
};

type OrderCardProps = OrderType & {
  onAdd: (id: number) => void;
};

function OrderCard({ id, name, cups, price, onAdd }: OrderCardProps) {
  return (
    <article className="card">
      <div>Item {name}: </div>
      <div>Price: ${price}</div>
      <button onClick={() => onAdd(id)}>加一</button>
      <div>{cups} 杯</div>
      <div>{cups * price} 元</div>
    </article>
  );
}

export default function App() {
  const [orders, setOrders] = useState<OrderType[]>([
    { id: 1, name: "Latte", cups: 0, price: 100 },
    { id: 2, name: "Moca", cups: 0, price: 120 },
    { id: 3, name: "曼特寧", cups: 0, price: 140 },
    { id: 4, name: "Latte", cups: 0, price: 100 },
    { id: 5, name: "Moca", cups: 0, price: 120 },
    { id: 6, name: "曼特寧", cups: 0, price: 140 },
    { id: 7, name: "Latte", cups: 0, price: 100 },
    { id: 8, name: "Moca", cups: 0, price: 120 },
    { id: 9, name: "曼特寧", cups: 0, price: 140 },
  ]);

  // const [totalCups, setTotalCups] = useState(0);
  const totalCups = orders.reduce((total, order) => {
    return total + order.cups;
  }, 0);

  const totalAmount = orders.reduce((total, order) => {
    return total + order.cups * order.price;
  }, 0);

  function addOne(id: number) {
    const newOrders = orders.map((order) => {
      // if (order.id === id) {
      //   let newOrder = { ...order };
      //   newOrder.cups += 1;
      //   return newOrder;
      // } else {
      //   return order;
      // }

      return order.id === id ? { ...order, cups: order.cups + 1 } : order;
    });
    setOrders(newOrders);
    // setTotalCups((prev) => prev + 1);
  }

  // const addOne = useCallback(
  //   (id: number) => {
  //     const newOrders = orders.map((order) => {
  //       // if (order.id === id) {
  //       //   let newOrder = { ...order };
  //       //   newOrder.cups += 1;
  //       //   return newOrder;
  //       // } else {
  //       //   return order;
  //       // }

  //       return order.id === id ? { ...order, cups: order.cups + 1 } : order;
  //     });
  //     setOrders(newOrders);
  //   },
  //   [orders],
  // );

  return (
    <div>
      <h1 className="container">訂單系統</h1>
      <div className="list">
        {orders.map((order) => {
          return <OrderCard key={order.id} {...order} onAdd={addOne} />;
        })}
      </div>
      <hr />
      {/* 以下呈現總杯數/金額 */}
      <div>
        {totalCups} / {totalAmount}
      </div>
    </div>
  );
}

import "./harry.css";
import { useState } from "react";

type Order = {
  id: number;
  name: string;
  cups: number;
};

export default function OrderCard() {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 1,
      name: "Latte",
      cups: 0,
    },
    {
      id: 2,
      name: "Moca",
      cups: 0,
    },
    {
      id: 3,
      name: "曼特寧",
      cups: 0,
    },
  ]);

  function addCup(id: number) {
    setOrders((orders) => {
      return orders.map((order) => {
        if (order.id === id) {
          let newOrder = { ...order };
          newOrder.cups += 1;
          return newOrder;
        } else {
          return order;
        }

        ///
        return order.id === id ? { ...order, cups: order.cups + 1 } : order;
      });
    });
  }

  return orders.map((order) => (
    <button key={order.id} onClick={() => addCup(order.id)}>
      {order.name} : {order.cups}
    </button>
  ));
}

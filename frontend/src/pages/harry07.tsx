import "./harry.css";

type OrderType = {
  id: number;
  name: string;
  cups: number;
  price: number;
};

export default function App() {
  const orders: OrderType[] = [
    { id: 1, name: "Latte", cups: 100, price: 2 },
    { id: 2, name: "Latte2", cups: 0, price: 0 },
    { id: 3, name: "Latte3", cups: 140, price: 3 },
  ];

  const names = orders.map((order) => {
    return order.name;
  });

  const selectedOrders = orders.filter((order) => {
    return order.cups > 0;
  });

  const totalCups = orders.reduce((total, order) => {
    return total + order.cups;
  }, 0);

  const totalPrice = orders.reduce((total, order) => {
    return total + order.cups * order.price;
  }, 0);

  return (
    <div>
      <pre style={{ textAlign: "left" }}>{JSON.stringify(orders, null, 2)}</pre>
      <hr />
      <pre style={{ textAlign: "left" }}>{JSON.stringify(names, null, 2)}</pre>
      <hr />
      <pre style={{ textAlign: "left" }}>
        {JSON.stringify(selectedOrders, null, 2)}
      </pre>
      <hr />
      <div>
        {totalCups} / {totalPrice}
      </div>
    </div>
  );
}

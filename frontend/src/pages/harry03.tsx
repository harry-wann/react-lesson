import "./harry.css";

function OrderCard({ name }: { name: string }) {
  return (
    <>
      <p className="card">{name}</p>
    </>
  );
}

export default function App() {
  return <OrderCard name="Latte v2" />;
}

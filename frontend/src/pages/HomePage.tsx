import { useEffect, useState } from "react";
import type { Member } from "../types/Member";

export default function HomePage() {
  const memberJson = localStorage.getItem("member");
  const member: Member | null = memberJson ? JSON.parse(memberJson) : null;
  if (!member) return <p>Login first</p>;

  return (
    <main>
      <h1>Home page</h1>
      <hr />
      <h2>Welcome, {member?.name}</h2>
      <hr />
    </main>
  );
}

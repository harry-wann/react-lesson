import type { LoginRequest, LoginResonse } from "../types/Login";

const API_URL = "http://localhost:8080/members/login";

export async function login(request: LoginRequest): Promise<LoginResonse> {
  console.log(JSON.stringify(request));

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error(`Login failed: ${response.status}`);
  }

  return response.json();
}

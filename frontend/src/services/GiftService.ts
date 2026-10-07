import type { Gifts } from "../types/Gift";

const URL = "http://localhost:8080/gifts";

export async function queryGifts(
  page: number,
  pageSize: number,
  abort: AbortSignal,
): Promise<Gifts> {
  const token = localStorage.getItem("token");

  const query = new URLSearchParams({
    page: `${page}`,
    pageSize: `${pageSize}`,
  });

  const fullUrl = `${URL}?${query.toString()}`;

  const response = await fetch(fullUrl, {
    method: "get",
    signal: abort,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error();
  }

  return response.json();
}

import { useState } from "react";
import type { Gift, Gifts } from "../../types/Gift";

export default function GiftList() {
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [retry, setRetry] = useState(0);
  const [result, setResult] = useState<Gifts>();
  const pageSize = 10;

  return (
    <div>
      <h3>Gift Table</h3>
      <hr />
      {result?.payload.length === 0 ? (
        <p>No Data</p>
      ) : (
        <div>
          <div>
            <p>TotalItem: {result?.total}</p>
            <p>
              {result?.page} / {result?.totalPage}
            </p>
          </div>

          <div>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>ADDR</th>
                  <th>TEL</th>
                </tr>
              </thead>
              <tbody>
                {result?.payload.map((gift) => {
                  return (
                    <tr key={gift.id}>
                      <th>{gift.id}</th>
                      <th>{gift.name}</th>
                      <th>{gift.addr}</th>
                      <th>{gift.tel}</th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

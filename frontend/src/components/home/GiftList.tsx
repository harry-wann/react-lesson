import { useEffect, useState } from "react";
import type { Gift, Gifts } from "../../types/Gift";
import { queryGifts } from "../../services/GiftService";

export default function GiftList() {
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [retry, setRetry] = useState(0);
  const [result, setResult] = useState<Gifts | null>();
  const pageSize = 10;

  const controller = new AbortController();
  const signal = controller.signal;

  function changePage(nextPage: number) {
    prepareLoading();
    setPage(nextPage);
  }

  function prepareLoading() {
    setLoading(true);
    setResult(null);
  }

  useEffect(() => {
    async function loadGifts() {
      try {
        const result = await queryGifts(page, pageSize, signal);

        const lastPage = Math.max(0, result.totalPage - 1);
        if (page > lastPage) {
          setPage(lastPage);
          return;
        }

        setResult(result);
        setLoading(false);
      } catch (e) {}
    }

    loadGifts();
  }, [page]);

  const pending = loading || result?.page !== page;

  return (
    <div>
      <h3>Gift Table</h3>
      <hr />

      {pending && <p>Loading...</p>}

      {result?.data.length === 0 ? (
        <p>No Data</p>
      ) : (
        <div>
          <div>
            <p>TotalItem: {result?.total}</p>
            <p>
              <button
                disabled={page === 0}
                type="button"
                onClick={() => changePage(Math.max(0, page - 1))}
              >
                Prev
              </button>
              | {result?.page ? result.page + 1 : 0} / {result?.totalPage} |
              <button
                disabled={result?.isLast}
                type="button"
                onClick={() => changePage(Math.min(page + 1))}
              >
                Next
              </button>
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
                {result?.data.map((gift) => {
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

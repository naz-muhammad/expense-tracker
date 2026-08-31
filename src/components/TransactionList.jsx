import React, { useContext } from "react";
import { TrasactionContext } from "../context/TransactionContextProvider";

function TransactionList({ setEditingTransaction }) {
  const { transaction, deleteTransaction } =
    useContext(TrasactionContext);

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

      {/* =====================================================
          HEADER
          ===================================================== */}
      <div className="flex items-center justify-between gap-4 border-b border-slate-100 p-5 sm:p-6">
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-600">
            Activity
          </p>

          <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
            Recent Transactions
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            View and manage your recent income and expenses.
          </p>
        </div>

        {/* Total number of transactions */}
        <div className="hidden shrink-0 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600 sm:block">
          {transaction.length}{" "}
          {transaction.length === 1
            ? "transaction"
            : "transactions"}
        </div>
      </div>

      {/* =====================================================
          EMPTY STATE
          ===================================================== */}
      {transaction.length === 0 ? (
        <div className="flex min-h-56 items-center justify-center p-6">
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-xl">
              ₨
            </div>

            <h3 className="font-semibold text-slate-800">
              No transactions yet
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Add your first transaction to start tracking your finances.
            </p>
          </div>
        </div>
      ) : (
        /* ===================================================
           TRANSACTION LIST
           =================================================== */
        <div className="divide-y divide-slate-100">

          {transaction.map((item) => (
            <div
              key={item.id}
              className="
                flex flex-col gap-4
                p-4 transition hover:bg-slate-50/70
                sm:flex-row sm:items-center sm:justify-between
                sm:px-6
              "
            >

              {/* =================================================
                  LEFT SIDE
                  Description + category + date
                  ================================================= */}
              <div className="flex min-w-0 items-center gap-3">

                {/* Transaction type indicator */}
                <div
                  className={`
                    flex h-10 w-10 shrink-0 items-center justify-center
                    rounded-xl text-sm font-bold
                    ${
                      item.type === "income"
                        ? "bg-green-50 text-green-600"
                        : "bg-red-50 text-red-600"
                    }
                  `}
                >
                  {item.type === "income" ? "+" : "−"}
                </div>

                <div className="min-w-0">
                  <h3 className="truncate font-semibold text-slate-900">
                    {item.description}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                    {item.category}
                    <span className="mx-1.5 text-slate-300">•</span>
                    {new Date(item.date).toLocaleDateString("en-GB")}
                  </p>
                </div>
              </div>

              {/* =================================================
                  RIGHT SIDE
                  Amount + Edit + Delete
                  ================================================= */}
              <div className="flex items-center justify-between gap-4 sm:justify-end">

                {/* Amount */}
                <p
                  className={`
                    shrink-0 text-sm font-bold sm:text-base
                    ${
                      item.type === "income"
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  `}
                >
                  {item.type === "income"
                    ? `+ Rs. ${Number(item.amount).toLocaleString()}`
                    : `− Rs. ${Number(item.amount).toLocaleString()}`}
                </p>

                {/* Action buttons */}
                <div className="flex shrink-0 gap-2">

                  {/* Edit */}
                  <button
                    type="button"
                    onClick={() => setEditingTransaction(item)}
                    className="
                      rounded-lg border border-slate-200
                      bg-white px-3 py-2
                      text-xs font-semibold text-slate-700
                      transition
                      hover:bg-slate-50
                      sm:text-sm
                    "
                  >
                    Edit
                  </button>

                  {/* Delete */}
                  <button
                    type="button"
                    onClick={() => deleteTransaction(item.id)}
                    className="
                      rounded-lg border border-red-100
                      bg-white px-3 py-2
                      text-xs font-semibold text-red-600
                      transition
                      hover:bg-red-50
                      sm:text-sm
                    "
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TransactionList;

import React from "react";

function TransactionList() {
  return (
    <div className="w-full mt-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">

      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
          Transactions
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          View and manage your recent transactions.
        </p>
      </div>

      {/* Search & Filter */}
      <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">

        {/* Search */}
        <div className="sm:col-span-2">
          <input
            type="text"
            placeholder="Search transactions..."
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Category */}
        <select
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        >
          <option>All Categories</option>
          <option>Food</option>
          <option>Transport</option>
          <option>Shopping</option>
          <option>Bills</option>
          <option>Entertainment</option>
          <option>Health</option>
          <option>Education</option>
        </select>

      </div>

      {/* Transaction List */}
      <div className="space-y-3">

        {/* Transaction 1 */}
        <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4 sm:flex-row sm:items-center sm:justify-between">

          <div className="min-w-0">
            <h3 className="truncate font-semibold text-gray-900">
              Grocery Shopping
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Food · Aug 27, 2026
            </p>
          </div>

          <div className="flex items-center justify-between gap-4 sm:justify-end">

            <p className="shrink-0 font-semibold text-red-600">
              - $50.00
            </p>

            <div className="flex gap-2">
              <button
                type="button"
                className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
              >
                Edit
              </button>

              <button
                type="button"
                className="rounded-lg border border-red-200 bg-white px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
              >
                Delete
              </button>
            </div>

          </div>

        </div>

        {/* Transaction 2 */}
        <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4 sm:flex-row sm:items-center sm:justify-between">

          <div className="min-w-0">
            <h3 className="truncate font-semibold text-gray-900">
              Freelance Payment
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Freelance · Aug 26, 2026
            </p>
          </div>

          <div className="flex items-center justify-between gap-4 sm:justify-end">

            <p className="shrink-0 font-semibold text-green-600">
              + $200.00
            </p>

            <div className="flex gap-2">
              <button
                type="button"
                className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
              >
                Edit
              </button>

              <button
                type="button"
                className="rounded-lg border border-red-200 bg-white px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
              >
                Delete
              </button>
            </div>

          </div>

        </div>

        {/* Transaction 3 */}
        <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4 sm:flex-row sm:items-center sm:justify-between">

          <div className="min-w-0">
            <h3 className="truncate font-semibold text-gray-900">
              Transport
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Transport · Aug 25, 2026
            </p>
          </div>

          <div className="flex items-center justify-between gap-4 sm:justify-end">

            <p className="shrink-0 font-semibold text-red-600">
              - $10.00
            </p>

            <div className="flex gap-2">
              <button
                type="button"
                className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
              >
                Edit
              </button>

              <button
                type="button"
                className="rounded-lg border border-red-200 bg-white px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
              >
                Delete
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default TransactionList;
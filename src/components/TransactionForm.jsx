import React, { useContext, useEffect, useState } from "react";
import { TrasactionContext } from "../context/TransactionContextProvider";

function TransactionForm({ editingTransaction, setEditingTransaction }) {
  const { setTransaction, updateTransaction } =
    useContext(TrasactionContext);

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const [showForm, setShowForm] = useState(false);

  const categories = [
    "food",
    "transport",
    "shopping",
    "bills",
    "entertainment",
    "health",
    "education",
    "rent",
    "salary",
    "freelance",
    "business",
    "investment",
    "gift",
    "other",
  ];

  // Fill form when editing
  useEffect(() => {
    if (!editingTransaction) return;

    setDescription(editingTransaction.description);
    setAmount(editingTransaction.amount);
    setType(editingTransaction.type);
    setCategory(editingTransaction.category);
    setDate(editingTransaction.date);

    // Automatically open form when editing
    setShowForm(true);
  }, [editingTransaction]);

  function resetForm() {
    setDescription("");
    setAmount("");
    setType("");
    setCategory("");
    setDate("");
  }

  function handleCancel() {
    resetForm();
    setEditingTransaction(null);
    setShowForm(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (editingTransaction) {
      const updatedTransaction = {
        id: editingTransaction.id,
        description,
        amount,
        type,
        category,
        date,
      };

      updateTransaction(updatedTransaction);
    } else {
      setTransaction((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          description,
          amount,
          type,
          category,
          date,
        },
      ]);
    }

    resetForm();
    setEditingTransaction(null);
    setShowForm(false);
  }

  return (
    <div className="mt-8 w-full">

      {/* Mobile Add Button */}
      <div className="mb-4 sm:hidden">
        {!showForm && (
          <button
            type="button"
            onClick={() => setShowForm(true)}
            className="w-full rounded-xl bg-blue-600 px-5 py-3.5 font-semibold text-white shadow-sm transition hover:bg-blue-700 active:scale-[0.99]"
          >
            + Add Transaction
          </button>
        )}
      </div>

      {/* Form Container */}
      <div
        className={`w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6 ${
          showForm ? "block" : "hidden sm:block"
        }`}
      >

        {/* Header */}
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              {editingTransaction
                ? "Edit Transaction"
                : "Add Transaction"}
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              {editingTransaction
                ? "Update your transaction details"
                : "Record your income or expense"}
            </p>
          </div>

          {/* Mobile Close Button */}
          <button
            type="button"
            onClick={handleCancel}
            className="rounded-lg px-2 py-1 text-2xl leading-none text-gray-400 transition hover:bg-gray-100 hover:text-gray-700 sm:hidden"
            aria-label="Close form"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Description
            </label>

            <input
              id="description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g. Grocery shopping"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Amount */}
          <div>
            <label
              htmlFor="amount"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Amount
            </label>

            <input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              placeholder="0.00"
              min="0"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Type + Category */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

            {/* Type */}
            <div>
              <label
                htmlFor="type"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Type
              </label>

              <select
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                <option value="">Select type</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </div>

            {/* Category */}
            <div>
              <label
                htmlFor="category"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Category
              </label>

              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                <option value="">Select category</option>

                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Date */}
          <div>
            <label
              htmlFor="date"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Date
            </label>

            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.99] sm:w-auto"
            >
              {editingTransaction
                ? "Update Transaction"
                : "Add Transaction"}
            </button>

            {showForm && (
              <button
                type="button"
                onClick={handleCancel}
                className="w-full rounded-lg border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-100 sm:w-auto"
              >
                Cancel
              </button>
            )}

          </div>
        </form>
      </div>
    </div>
  );
}

export default TransactionForm;
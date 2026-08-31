import React, { useContext, useEffect, useState } from "react";
import { TrasactionContext } from "../context/TransactionContextProvider";

function TransactionForm({ editingTransaction, setEditingTransaction }) {
  const { setTransaction, updateTransaction } =
    useContext(TrasactionContext);

  // Form state
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

  // Reuse these classes instead of repeating the same
  // Tailwind classes on every input and select.
  const inputClass =
    "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50";

  const labelClass =
    "mb-2 block text-sm font-semibold text-slate-700";

  // When editingTransaction changes, fill the form
  // with the selected transaction's existing data.
  useEffect(() => {
    if (!editingTransaction) return;

    setDescription(editingTransaction.description);
    setAmount(editingTransaction.amount);
    setType(editingTransaction.type);
    setCategory(editingTransaction.category);
    setDate(editingTransaction.date);
    setShowForm(true);
  }, [editingTransaction]);

  // Clear all form fields.
  function resetForm() {
    setDescription("");
    setAmount("");
    setType("");
    setCategory("");
    setDate("");
  }

  // Close the form and cancel the current action.
  function handleCancel() {
    resetForm();
    setEditingTransaction(null);
    setShowForm(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Update an existing transaction.
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
      // Add a new transaction to the existing array.
      setTransaction((prev) => [
        ...prev,
        {
          id: Date.now(),
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
    <div className="w-full">
      {/* Add Transaction button */}
      {!showForm && (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setShowForm(true)}
            className="
              w-full rounded-xl bg-blue-600 px-5 py-3.5
              text-sm font-semibold text-white shadow-sm
              transition hover:bg-blue-700 hover:shadow-md
              active:scale-[0.99]
              sm:w-auto sm:min-w-52
            "
          >
            <span className="mr-1 text-lg">+</span>
            Add Transaction
          </button>
        </div>
      )}

      {/* Transaction form */}
      {showForm && (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

          {/* Form header */}
          <div className="flex items-start justify-between gap-4 border-b border-slate-100 bg-slate-50 p-5 sm:p-6">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-600">
                Transaction
              </p>

              <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                {editingTransaction
                  ? "Edit Transaction"
                  : "Add Transaction"}
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                {editingTransaction
                  ? "Update the details of this transaction."
                  : "Record your income or expense."}
              </p>
            </div>

            {/* Close form */}
            <button
              type="button"
              onClick={handleCancel}
              aria-label="Close form"
              className="
                flex h-9 w-9 shrink-0 items-center justify-center
                rounded-lg text-xl text-slate-400
                transition hover:bg-white hover:text-slate-700
              "
            >
              ×
            </button>
          </div>

          {/* Form fields */}
          <form onSubmit={handleSubmit} className="space-y-5 p-5 sm:p-6">

            {/* Description */}
            <div>
              <label htmlFor="description" className={labelClass}>
                Description
              </label>

              <input
                id="description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="e.g. Grocery shopping"
                className={inputClass}
              />
            </div>

            {/* Amount */}
            <div>
              <label htmlFor="amount" className={labelClass}>
                Amount
              </label>

              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-400">
                  Rs.
                </span>

                <input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  placeholder="0"
                  min="0"
                  className={`${inputClass} pl-12`}
                />
              </div>
            </div>

            {/* Type and Category */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              <div>
                <label htmlFor="type" className={labelClass}>
                  Type
                </label>

                <select
                  id="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className={inputClass}
                >
                  <option value="">Select type</option>
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>
              </div>

              <div>
                <label htmlFor="category" className={labelClass}>
                  Category
                </label>

                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className={inputClass}
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
              <label htmlFor="date" className={labelClass}>
                Date
              </label>

              <input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={inputClass}
              />
            </div>

            {/* Form actions */}
            <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={handleCancel}
                className="
                  w-full rounded-xl border border-slate-300
                  bg-white px-5 py-3 text-sm font-semibold
                  text-slate-700 transition hover:bg-slate-50
                  sm:w-auto
                "
              >
                Cancel
              </button>

              <button
                type="submit"
                className="
                  w-full rounded-xl bg-blue-600 px-5 py-3
                  text-sm font-semibold text-white shadow-sm
                  transition hover:bg-blue-700 hover:shadow-md
                  active:scale-[0.99]
                  sm:w-auto
                "
              >
                {editingTransaction
                  ? "Update Transaction"
                  : "Add Transaction"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default TransactionForm;

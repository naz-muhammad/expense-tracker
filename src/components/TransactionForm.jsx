import React from 'react'

function TransactionForm() {

  function handleSubmit(e) {
    e.preventDefault()
    console.log('submit successful');
    
  }

  return (
    <div className="mt-8 w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6 ">

      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Add Transaction
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Record your income or expense
        </p>
      </div>


      {/* Form */}
      <form className="space-y-5">

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
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
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
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="">Select category</option>
              <option value="food">Food</option>
              <option value="transport">Transport</option>
              <option value="shopping">Shopping</option>
              <option value="bills">Bills</option>
              <option value="entertainment">Entertainment</option>
              <option value="health">Health</option>
              <option value="education">Education</option>
              <option value="rent">Rent</option>
              <option value="salary">Salary</option>
              <option value="freelance">Freelance</option>
              <option value="business">Business</option>
              <option value="investment">Investment</option>
              <option value="gift">Gift</option>
              <option value="other">Other</option>
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
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>


        {/* Button */}
        <button
          onClick={handleSubmit}
          type="submit"
          className="w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.99] sm:w-auto"
        >
          Add Transaction
        </button>

      </form>

    </div>
  )
}

export default TransactionForm
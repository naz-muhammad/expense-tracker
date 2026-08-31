import React, { useContext, useState } from "react";
import SummaryCard from "../components/SummaryCard";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import { TrasactionContext } from "../context/TransactionContextProvider";
import ExpenseByCategory from "../components/ExpenseByCategory";
import ExpenseTrend from "../components/ExpenseTrend";

function Dashboard() {
  const { transaction } = useContext(TrasactionContext);

  // Keeps track of the transaction currently being edited.
  // null means that we are not editing any transaction.
  const [editingTransaction, setEditingTransaction] = useState(null);

  // Get only expense transactions.
  // We use this data later for the category and trend charts.
  const expenseTransaction = transaction.filter(
    (item) => item.type === "expense",
  );

  // Calculate total expenses for each category.
  //
  // Example:
  // {
  //   food: 5000,
  //   transport: 2000,
  //   shopping: 3000
  // }
  const categoryTotals = expenseTransaction.reduce((acc, val) => {
    const category = val.category;

    if (acc[category]) {
      acc[category] = acc[category] + Number(val.amount);
    } else {
      acc[category] = Number(val.amount);
    }

    return acc;
  }, {});

  // Calculate total expenses for each date.
  // This data is used by the ExpenseTrend component
  // to show how spending changes over time.
  const categoryByDate = expenseTransaction.reduce((acc, val) => {
    const date = val.date;

    if (acc[date]) {
      acc[date] += Number(val.amount);
    } else {
      acc[date] = Number(val.amount);
    }

    return acc;
  }, {});

  // Calculate total income from all income transactions.
  const totalIncome = transaction
    .filter((item) => item.type === "income")
    .reduce((total, item) => total + Number(item.amount), 0);

  // Calculate total expenses from all expense transactions.
  const totalExpense = transaction
    .filter((item) => item.type === "expense")
    .reduce((total, item) => total + Number(item.amount), 0);

  // Balance = money earned - money spent.
  const totalBalance = totalIncome - totalExpense;

  // Keep the summary card information in an array so
  // we can render the cards dynamically with map().
  const summaryCards = [
    {
      title: "Total Balance",
      balance: totalBalance,
      color: "text-blue-600",
      bgColor: "bg-blue-600",
    },
    {
      title: "Income",
      balance: totalIncome,
      color: "text-green-600",
      bgColor: "bg-green-600",
    },
    {
      title: "Expense",
      balance: totalExpense,
      color: "text-red-600",
      bgColor: "bg-red-600",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-5 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <header className="mb-7 sm:mb-9">
          <div className="flex items-center justify-between gap-4">

            {/* Dashboard title and description */}
            <div>
              <p className="mb-1 text-sm font-semibold tracking-wide text-blue-600">
                PERSONAL FINANCE
              </p>

              <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Expense Tracker
              </h1>

              <p className="mt-1.5 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                Keep track of your income, expenses, and overall balance.
              </p>
            </div>

          </div>
        </header>

        {/* SUMMARY CARDS */}
        <section className="mb-7 grid grid-cols-2 gap-3 sm:mb-8 sm:gap-5 lg:grid-cols-3">

          {summaryCards.map((card, index) => (
            <div
              key={card.title}
              className={
                index === 0
                  ? "col-span-2 lg:col-span-1"
                  : ""
              }
            >
              <SummaryCard
                title={card.title}
                balance={card.balance}
                color={card.color}
                bgColor={card.bgColor}
              />
            </div>
          ))}
        </section>

        {/* ADD TRANSACTION */}
        <section className="mb-7 sm:mb-8">
          <TransactionForm
            editingTransaction={editingTransaction}
            setEditingTransaction={setEditingTransaction}
          />
        </section>

        {/* EXPENSE ANALYTICS */}
        <main className="space-y-6 sm:space-y-8">

          {/* Expense distribution by category */}
          <section className="flex flex-col md:flex-row gap-4">
            <ExpenseByCategory categoryTotals={categoryTotals} />
            <TransactionList
              setEditingTransaction={setEditingTransaction}
            />
          </section>

          {/*  RECENT TRANSACTIONS */}
          <section>
            
          </section>

          {/* Expense spending trend over time */}
          <section>
            <ExpenseTrend categoryByDate={categoryByDate} />
          </section>

          
        </main>
      </div>
    </div>
  );
}

export default Dashboard;

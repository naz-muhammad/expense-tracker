import React, { useContext, useState } from "react";
import SummaryCard from "./components/SummaryCard";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import { TrasactionContext } from "./context/TransactionContextProvider";

function App() {
  const { transaction } = useContext(TrasactionContext);

  const [editingTransaction , setEditingTransaction] = useState(null)
  console.log(editingTransaction);
  

  const totalIncome = transaction
    .filter((item) => item.type === "income")
    .reduce((total, item) => total + Number(item.amount), 0);

  const totalExpense = transaction
    .filter((item) => item.type === "expense")
    .reduce((total, item) => total + Number(item.amount), 0);

  const totalBalance = totalIncome - totalExpense;

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
    <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <header className="mb-8 sm:mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Expense Tracker
          </h1>

          <p className="mt-2 max-w-xl text-sm text-gray-500 sm:text-base">
            Keep track of your income, expenses, and overall balance.
          </p>
        </header>

        {/* Summary Cards */}
        <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {summaryCards.map((card) => (
            <SummaryCard
              key={card.title}
              title={card.title}
              balance={card.balance}
              color={card.color}
              bgColor={card.bgColor}
            />
          ))}
        </section>

        {/* Main Content */}
        <main className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:items-start">

          {/* Add Transaction */}
          <section className="lg:col-span-2">
            <TransactionForm editingTransaction={editingTransaction} setEditingTransaction={setEditingTransaction}/>
          </section>

          {/* Transactions */}
          <section className="lg:col-span-3">
            <TransactionList 
            editingTransaction={editingTransaction}
            setEditingTransaction={setEditingTransaction} />
          </section>

        </main>

      </div>
    </div>
  );
}

export default App;
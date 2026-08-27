import React from 'react'

function SummaryCard({ title, balance, color, bgColor }) {
  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md sm:p-6">
      
      <h2 className="text-sm font-medium text-gray-500 sm:text-base">
        {title}
      </h2>

      <h3 className={`mt-2 text-2xl font-bold sm:text-3xl ${color}`}>
        {balance}
      </h3>

      <div className={`mt-4 h-1 w-12 rounded-full ${bgColor}`}></div>

    </div>
  )
}

export default SummaryCard
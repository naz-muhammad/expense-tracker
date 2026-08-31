import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function ExpenseTrend({ categoryByDate }) {

    const lineChartData = Object.entries(categoryByDate)?.map(([date , amount]) => (
        {
            date, 
            amount,
        }
    ));

  return (
    <div className="mt-8 w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
          Expense Trend
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Track your spending over time.
        </p>
      </div>

      {/* Empty State */}
      {lineChartData.length === 0 ? (
        <div className="flex min-h-62.5 items-center justify-center rounded-xl bg-gray-50">
          <p className="text-sm text-gray-500">
            No expense data available yet.
          </p>
        </div>
      ) : (
        /* Line Chart */
        <div className="h-75 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={lineChartData}
              margin={{
                top: 10,
                right: 10,
                left: 0,
                bottom: 10,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis
                dataKey="date"
                tick={{ fontSize: 12 }}
              />

              <YAxis
                tick={{ fontSize: 12 }}
              />

              <Tooltip
                formatter={(value) => [
                  `Rs. ${Number(value).toLocaleString()}`,
                  "Expense",
                ]}
              />

              <Line
                type="monotone"
                dataKey="amount"
                stroke="#ef4444"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

export default ExpenseTrend;
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
  // Convert the object into an array that Recharts can use.
  const lineChartData = Object.entries(categoryByDate)?.map(
    ([date, amount]) => ({
      date,
      amount: Number(amount),
    }),
  );

  return (
    <div className="w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

      {/* =====================================================
          HEADER
          ===================================================== */}
      <div className="mb-6">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-600">
          Spending Activity
        </p>

        <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
          Expense Trend
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Track your spending over time.
        </p>
      </div>

      {/* =====================================================
          EMPTY STATE
          ===================================================== */}
      {lineChartData.length === 0 ? (
        <div className="flex min-h-72 items-center justify-center rounded-xl bg-slate-50">
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg shadow-sm">
              ₨
            </div>

            <p className="font-semibold text-slate-700">
              No expense data yet
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Add an expense to see your spending trend.
            </p>
          </div>
        </div>
      ) : (
        /* ===================================================
           LINE CHART
           =================================================== */
        <div className="h-72 w-full sm:h-80">
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
              {/* Background grid */}
              <CartesianGrid strokeDasharray="3 3" />

              {/* X Axis */}
              <XAxis
                dataKey="date"
                tick={{ fontSize: 12 }}
                tickMargin={8}
              />

              {/* Y Axis */}
              <YAxis
                tick={{ fontSize: 12 }}
                tickMargin={8}
              />

              {/* Information shown when hovering */}
              <Tooltip
                formatter={(value) => [
                  `Rs. ${Number(value).toLocaleString()}`,
                  "Expense",
                ]}
                labelFormatter={(date) =>
                  new Date(date).toLocaleDateString("en-GB")
                }
              />

              {/* Expense line */}
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

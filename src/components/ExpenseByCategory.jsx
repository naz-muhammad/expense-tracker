import React from "react";
import {
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  Legend,
  Cell,
} from "recharts";

function ExpenseByCategory({ categoryTotals }) {
  // Convert the categoryTotals object into the array format
  // that Recharts expects.
  const chartData = Object.entries(categoryTotals).map(
    ([category, amount]) => ({
      category,
      amount: Number(amount),
    }),
  );

  // Different colors for different expense categories.
  const COLORS = [
    "#ef4444",
    "#3b82f6",
    "#22c55e",
    "#f59e0b",
    "#8b5cf6",
    "#ec4899",
    "#14b8a6",
    "#f97316",
    "#6366f1",
    "#84cc16",
  ];

  return (
    <div className="w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

      {/* =====================================================
          HEADER
          ===================================================== */}
      <div className="mb-6">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-600">
          Spending Overview
        </p>

        <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
          Expense by Category
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          See where your money is being spent.
        </p>
      </div>

      {/* =====================================================
          EMPTY STATE
          ===================================================== */}
      {chartData.length === 0 ? (
        <div className="flex min-h-72 items-center justify-center rounded-xl bg-slate-50">
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg shadow-sm">
              ₨
            </div>

            <p className="font-semibold text-slate-700">
              No expense data yet
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Add an expense to see your spending breakdown.
            </p>
          </div>
        </div>
      ) : (
        /* ===================================================
           PIE CHART
           =================================================== */
        <div className="h-80 w-full sm:h-96">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="amount"
                nameKey="category"
                cx="50%"
                cy="45%"
                outerRadius="65%"
                innerRadius="38%"
                paddingAngle={2}
                label
              >
                {/* Give each category its own color. */}
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${entry.category}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              {/* Shows the exact amount when hovering. */}
              <Tooltip
                formatter={(value) => [
                  `Rs. ${Number(value).toLocaleString()}`,
                  "Amount",
                ]}
              />

              {/* Shows category names below the chart. */}
              <Legend
                verticalAlign="bottom"
                height={36}
                wrapperStyle={{
                  fontSize: "12px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

export default ExpenseByCategory;

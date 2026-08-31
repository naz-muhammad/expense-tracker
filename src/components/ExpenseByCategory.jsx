import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Pie,
  PieChart,
  Legend,
  Sector,
} from "recharts";

function ExpenseByCategory({ categoryTotals }) {
  const chartData = Object.entries(categoryTotals).map(
    ([category, amount]) => ({
      category,
      amount,
    }),
  );

  

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

  const renderCustomizedShape = (props) => {
    const { index, ...rest } = props;

    return (
      <Sector
        {...rest}
        fill={COLORS[index % COLORS.length]}
      />
    );
  };

  return (
    <div className="mt-8 w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
          Expense by Category
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          See how your expenses are distributed across categories.
        </p>
      </div>

      {chartData.length === 0 ? (
        <div className="flex min-h-62.5 items-center justify-center rounded-xl bg-gray-50">
          <p className="text-sm text-gray-500">
            No expense data available yet.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">

          {/* Left: Bar Chart */}
          <div className="h-75 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{
                  top: 10,
                  right: 10,
                  left: 0,
                  bottom: 10,
                }}
                barCategoryGap="25%"
              >
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis
                  dataKey="category"
                  tick={{ fontSize: 12 }}
                />

                <YAxis
                  tick={{ fontSize: 12 }}
                />

                <Tooltip
                  formatter={(value) => [
                    `Rs. ${Number(value).toLocaleString()}`,
                    "Amount",
                  ]}
                />

                <Bar
                  dataKey="amount"
                  fill="#ef4444"
                  maxBarSize={50}
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Right: Pie Chart */}
          <div className="h-75 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="amount"
                  nameKey="category"
                  cx="50%"
                  cy="50%"
                  outerRadius="70%"
                  label
                  shape={renderCustomizedShape}
                />

                <Tooltip
                  formatter={(value) => [
                    `Rs. ${Number(value).toLocaleString()}`,
                    "Amount",
                  ]}
                />

                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

        </div>
      )}
    </div>
  );
}

export default ExpenseByCategory;
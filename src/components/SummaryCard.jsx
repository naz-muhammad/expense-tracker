import React from "react";

function SummaryCard({ title, color, bgColor, balance }) {
  return (
    <div
      className="
        group relative w-full overflow-hidden rounded-2xl
        border border-slate-200 bg-white
        p-4 shadow-sm
        transition duration-200
        hover:-translate-y-0.5 hover:shadow-md
        sm:p-5
        lg:p-6
      "
    >
      {/* Decorative background element.
          This gives the card a subtle dashboard-style appearance
          without affecting the actual content. */}
      <div
        className={`
          absolute -right-8 -top-8
          h-24 w-24 rounded-full
          opacity-[0.06]
          ${bgColor}
          transition duration-300
          group-hover:scale-125
        `}
      />

      {/* Card content */}
      <div className="relative">

        {/* Small label above the main amount */}
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 sm:text-sm">
          {title}
        </p>

        {/* Main financial value */}
        <h3
          className={`
            mt-2 truncate
            text-2xl font-bold tracking-tight
            sm:text-3xl
            ${color}
          `}
        >
          Rs. {Number(balance).toLocaleString()}
        </h3>

        {/* Colored indicator line.
            bgColor comes from Dashboard and changes
            according to the card type. */}
        <div
          className={`
            mt-4 h-1 w-10 rounded-full
            sm:mt-5 sm:w-12
            ${bgColor}
          `}
        />
      </div>
    </div>
  );
}

export default SummaryCard;

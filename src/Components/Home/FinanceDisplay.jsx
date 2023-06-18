import React from "react";
import { useNavigate } from "react-router-dom";

const FinanceDisplay = ({ data }) => {
  const navigate = useNavigate();
  const navigateToMealOrderPage = () => {
    navigate("/meal", { replace: true });
  };
  return (
    <div className="col-span-2 h-full flex flex-col justify-center gap-y-2">
      <button
        onClick={() => navigate("/finance-management/meal-bill", { replace: true })}
        className={`w-full h-1/4 text-center p-16 text-xl font-serif ${
          data.meal < 100
            ? `${
                data.meal < 60
                  ? `${
                      data.meal < 50
                        ? "bg-red-500 text-white"
                        : "bg-red-300 text-white"
                    }`
                  : "bg-green-100 text-green-600"
              }`
            : "bg-green-500 text-white"
        }`}
      >
        Meal Bill
      </button>
      <button
        onClick={() => navigate("/finance-management/seat-rent", { replace: true })}
        className={`w-full h-1/4 text-center p-16 text-xl font-serif ${
          data.rent < 100
            ? `${
                data.rent < 60
                  ? `${
                      data.rent < 50
                        ? "bg-red-500 text-white"
                        : "bg-red-300 text-white"
                    }`
                  : "bg-green-100 text-green-600"
              }`
            : "bg-green-500 text-white"
        }`}
      >
        Seat Rent
      </button>
      <button
        onClick={() => navigate("/finance-management/salaries", { replace: true })}
        className={`w-full h-1/4 text-center p-16 text-xl font-serif ${
          data.salary < 100
            ? `${
                data.salary < 60
                  ? `${
                      data.salary < 50
                        ? "bg-red-500 text-white"
                        : "bg-red-300 text-white"
                    }`
                  : "bg-green-100 text-green-600"
              }`
            : "bg-green-500 text-white"
        }`}
      >
        Salaries
      </button>
    </div>
  );
};

export default FinanceDisplay;

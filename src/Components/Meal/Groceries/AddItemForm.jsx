import React from "react";

const AddItemForm = () => {
  return (
    <div>
      <form className="space-y-1">
        <label htmlFor="itemName">Grocery Item</label>
        <input
          type="text"
          className="w-full block outline-none border-2 border-gray-400 px-2 py-1.5 mb-2"
          name="itemName"
          id="itemName"
        />
        <div className="flex justify-between gap-x-5">
          <div>
            <label htmlFor="itemAmount">Enter Amount</label>
            <div className="border-2 border-gray-400 px-2 py-1.5 mb-2 flex justify-between gap-x-1">
              <input
                className="outline-none w-full"
                type="number"
                name=""
                id=""
              />
              <select id="countries" className="w-fit outline-none">
                <option value="piece">piece</option>
                <option value="Dozen">dozen</option>
                <option value="Kg">Kg</option>
                <option value="Gram">gram</option>
                <option value="Liter">liter</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="marketRate">Enter Market Rate</label>
            <div className="border-2 border-gray-400 px-2 py-1.5 mb-2 flex justify-between gap-x-1">
              <input
                className="outline-none"
                type="number"
                name=""
                id=""
              />
              <p>Taka</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-400 flex justify-between">
          <p>Total Cost</p>
          <p>= <span>2300</span> Taka</p>
        </div>
      </form>
    </div>
  );
};

export default AddItemForm;

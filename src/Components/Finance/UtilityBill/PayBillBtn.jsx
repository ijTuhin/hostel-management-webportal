import React from "react";

const PayBillBtn = ({data}) => {
  const updatePayBill = () => {};
  return (
    <>
      {/* The button to open modal */}
      <a
        href="#my-modal-2"
        className=""
      >
        <button
          className="border border-gray-300 text-gray-300 font-normal px-3.5 py-1 rounded hover:bg-green-500 hover:text-white"
        >
          Pay
        </button>
      </a>
      <div className="modal" id="my-modal-2">
        <div className="modal-box">
            <p className="font-normal text-lg">Pay Total <span className="capitalize">{data.name}</span> Bill {parseInt(data.bill) + parseInt(data.due)}?</p>
          <div className="modal-action">
            <a href="#">
              <button
                onClick={updatePayBill}
                className="bg-gray-400 font-medium px-3.5 py-2 rounded-lg hover:bg-blue-800 text-white"
              >
                Confirm
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PayBillBtn;

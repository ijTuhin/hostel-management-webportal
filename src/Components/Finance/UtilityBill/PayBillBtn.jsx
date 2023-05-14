import React, { useEffect } from "react";

const PayBillBtn = ({ data }) => {
  /* const month = d.toLocaleString('default', { month: 'long' }); */
  const d = new Date();
  const month = d.getMonth() + 1;
  const enrolled = d.getDate() + "-" + month + "-" + d.getFullYear();
  const updatePayBill = () => {
    const value = {
      status: 1,
      payDate: enrolled
    }
    fetch(`http://localhost:5000/utility-bill/${data._id}`, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    })
      .then((response) => response.json())
      .then((value) => {
        console.log("DB Success:", value);
      });
    
    window.location.reload(true)
  };
  return (
    <>
      <button
        onClick={updatePayBill}
        className="border border-gray-300 text-gray-300 font-normal px-3.5 py-1 rounded hover:bg-green-500 hover:text-white"
      >
        Pay
      </button>
      {/* The button to open modal */}
      <a href="#my-modal-2" className=""></a>
      <div className="modal" id="my-modal-2">
        <div className="modal-box">
          <p className="font-normal text-lg">
            Pay Total <span className="capitalize">{data.name}</span> Bill{" "}
            {parseInt(data.bill) + parseInt(data.due)}?
          </p>
          <div className="modal-action">
            <a href="#">
              <button className="bg-gray-400 font-medium px-3.5 py-2 rounded-lg hover:bg-blue-800 text-white">
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

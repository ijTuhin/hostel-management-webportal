import React from "react";
import { TbSearch } from "react-icons/tb";
import { MdPersonAddAlt,MdAdd } from "react-icons/md";
import { GrAddCircle } from "react-icons/gr";
const DataModal = () => {
  return (
    <>
      <label htmlFor="my-modal-4" className="cursor-pointer rounded-full hover:bg-emerald-700/25 bg-gray-200 p-6 text-8xl hover:shadow-md font-medium text-white">
      <MdAdd/>
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <label
            htmlFor="my-modal-4"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <a href="#" className="btn">
              Yay!
            </a>
          </div>
        </label>
      </label>
    </>
  );
};

export default DataModal;

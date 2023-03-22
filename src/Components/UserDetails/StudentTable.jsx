import React, { useEffect, useState } from "react";
import { RxCaretSort } from "react-icons/rx";
import StudentData from "./StudentData";

const StudentTable = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/public/student.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div class="w-full flex flex-col px-20 py-6">
      <div className="flex justify-between items-center px-2">
        <div className="flex gap-3 font-medium">
          <p>Total students: </p>
          <p>{data.length}</p>
        </div>
        {/* dropdown */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="">
            <p className="flex gap-x-1 justify-center items-center text-lg cursor-pointer px-2 py-1.5 hover:bg-stone-100 rounded">
              <span className="text-base">Sort</span>
              <RxCaretSort />
            </p>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content rounded-tr-none text-sm shadow bg-gray-50 rounded w-32"
          >
            <li className="hover:rounded-tl hover:bg-gray-200 py-0.5 px-1.5 w-full border-b">
              <button className="cursor-pointer py-1 px-1.5">
                Default
              </button>
            </li>
            <li className="hover:rounded-tl hover:bg-gray-200 py-0.5 px-1.5 w-full border-b">
              <button className="cursor-pointer py-1 px-1.5">
                Room No.
              </button>
            </li>
            <li className="hover:bg-gray-200 py-0.5 px-1.5 w-full border-b">
              <button className="cursor-pointer py-1 px-1.5">
                Department
              </button>
            </li>
            <li className="hover:bg-gray-200 py-0.5 px-1.5 w-full border-b">
              <button className="cursor-pointer py-1 px-1.5">
                Payment
              </button>
            </li>
            <li className="hover:rounded-b hover:bg-gray-200 py-0.5 px-1.5 ">
              <button className="cursor-pointer py-1 px-1.5">
                Enrollment Date
              </button>
            </li>
          </ul>
        </div>
        {/* dropdown */}
      </div>
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full">
              <thead class="bg-green-200 border-b border-green-100">
                <tr>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Matric ID
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Department
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Room No.
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Enrollment
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Payment
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                  >
                    Role/Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item) => (
                  <StudentData key={item._id} item={item} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentTable;

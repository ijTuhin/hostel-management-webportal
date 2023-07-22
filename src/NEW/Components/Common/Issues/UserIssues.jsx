import React from "react";
import ModalToPost from "../Modals/ModalToPost";
import { useLoaderData, useOutletContext } from "react-router-dom";
import { role } from "../../../Hooks/conditionData";
export default function UserIssues() {
  const item = useLoaderData();
  const [open, setOpen, data, setData, upload, setUpload] = useOutletContext();
  // setUpload(null);
  setData(null);
  const handleUpload = () => {
    if (upload?.reply !== "") console.log(upload);
  };
  const [selectedTab, setSelectedTab] = React.useState(0);
  const handleOpen = () => setOpen(true);
  const sortItems = () => {
    switch (selectedTab) {
      case 0:
        if (role === "accountant")
          return item.filter((i) => i.no === 5 || i.no === 6);
        else return item;
      case 1:
        return item.filter((i) => i.no === 1);
      case 2:
        return item.filter((i) => i.no === 2);
      case 3:
        return item.filter((i) => i.no === 3);
      case 4:
        return item.filter((i) => i.no === 4);
      case 5:
        return item.filter((i) => i.no === 5);
      case 6:
        return item.filter((i) => i.no === 6);
      case 7:
        return item.filter((i) => i.no === 7);
      case 8:
        return item.filter((i) => i.no === 8);
      default:
        if (role === "accountant")
          return item.filter((i) => i.no === 5 || i.no === 6);
        else return item;
    }
  };
  // const item = [
  //   { no: 1 },
  //   { no: 2 },
  //   { no: 3 },
  //   { no: 4 },
  //   { no: 5 },
  //   { no: 5 },
  //   { no: 6 },
  //   { no: 7 },
  //   { no: 8 },
  // ];

  return (
    <main className="py-4 text-gray-300 lg:grid lg:grid-cols-8 flex flex-col-reverse item-center gap-5">
      <ModalToPost
        operate={handleUpload}
        item={data}
        modalComponent={
          <div className="space-y-3">
            <p>Reply to {data}</p>
            <textarea
              onChange={(e) => {
                setUpload({
                  reply: e.target.value,
                });
              }}
              rows={3}
              type="text"
              className="border px-3 py-1.5 w-full bg-transparent rounded"
              name=""
              id=""
            />
          </div>
        }
      ></ModalToPost>
      <section className="col-span-6">
        {sortItems()?.map((i, index) => (
          <div
            key={index}
            className={`w-full flex lg:flex-row flex-col justify-between place-items-center p-3.5 border font-poppins ${
              i.no === 1
                ? "bg-teal-800"
                : i.no === 2
                ? "bg-slate-800"
                : i.no === 3
                ? "bg-cyan-800"
                : i.no === 4
                ? "bg-emerald-800"
                : i.no === 5
                ? "bg-green-800"
                : i.no === 6
                ? "bg-sky-800"
                : i.no === 7
                ? "bg-fuchsia-800"
                : "bg-indigo-800"
            }`}
          >
            <p className="space-x-5 text-xs">
              <span className="text-sm font-semibold">Issue {i.no}</span>
              <span>c183275</span>
              <span>Room No.401</span>
            </p>
            <div>
              <button
                onClick={() => {
                  setData(i.no);
                  setUpload(null);
                  handleOpen();
                }}
                className="px-3 py-1.5 text-xs hover:font-semibold"
              >
                Reply
              </button>
              <button
                // onClick={handleOpen}
                className="px-3 py-1.5 border rounded text-sm hover:bg-teal-900"
              >
                Solve
              </button>
            </div>
          </div>
        ))}
      </section>
      <nav className="col-span-2 space-y-1 lg:fixed right-28 w-64">
        <button
          onClick={() => setSelectedTab(0)}
          className={`w-full border text-start px-3 rounded-full hover:border-teal-800 hover:bg-teal-800 py-1.5 ${
            selectedTab === 0 && "border-teal-800 bg-teal-800"
          }`}
        >
          All Issues
        </button>
        {role === "warden" && (
          <>
            <button
              onClick={() => setSelectedTab(1)}
              className={`w-full border text-start px-3 rounded-full hover:border-teal-800 hover:bg-teal-800 py-1.5 ${
                selectedTab === 1 && "border-teal-800 bg-teal-800"
              }`}
            >
              Profile Edited
            </button>
            <button
              onClick={() => setSelectedTab(2)}
              className={`w-full border text-start px-3 rounded-full hover:border-teal-800 hover:bg-teal-800 py-1.5 ${
                selectedTab === 2 && "border-teal-800 bg-teal-800"
              }`}
            >
              Account Feature
            </button>
            <button
              onClick={() => setSelectedTab(3)}
              className={`w-full border text-start px-3 rounded-full hover:border-teal-800 hover:bg-teal-800 py-1.5 ${
                selectedTab === 3 && "border-teal-800 bg-teal-800"
              }`}
            >
              Room Facility
            </button>
            <button
              onClick={() => setSelectedTab(4)}
              className={`w-full border text-start px-3 rounded-full hover:border-teal-800 hover:bg-teal-800 py-1.5 ${
                selectedTab === 4 && "border-teal-800 bg-teal-800"
              }`}
            >
              Meal Quality
            </button>
            <button
              onClick={() => setSelectedTab(7)}
              className={`w-full border text-start px-3 rounded-full hover:border-teal-800 hover:bg-teal-800 py-1.5 ${
                selectedTab === 7 && "border-teal-800 bg-teal-800"
              }`}
            >
              User Behaviour
            </button>
            <button
              onClick={() => setSelectedTab(8)}
              className={`w-full border text-start px-3 rounded-full hover:border-teal-800 hover:bg-teal-800 py-1.5 ${
                selectedTab === 8 && "border-teal-800 bg-teal-800"
              }`}
            >
              Staff Behaviour
            </button>
          </>
        )}
        <button
          onClick={() => setSelectedTab(5)}
          className={`w-full border text-start px-3 rounded-full hover:border-teal-800 hover:bg-teal-800 py-1.5 ${
            selectedTab === 5 && "border-teal-800 bg-teal-800"
          }`}
        >
          Meal bill not added
        </button>
        <button
          onClick={() => setSelectedTab(6)}
          className={`w-full border text-start px-3 rounded-full hover:border-teal-800 hover:bg-teal-800 py-1.5 ${
            selectedTab === 6 && "border-teal-800 bg-teal-800"
          }`}
        >
          Seat rent not added
        </button>
      </nav>
    </main>
  );
}

import React, { useState } from "react";
import { Outlet } from "react-router-dom";

export default function AddUserPage() {
  const [value, setValue] = useState({
    dept: "CSE",
    program:"Bachelor's"
  });
  return (
    <div className="border-0 flex flex-col items-center justify-center py-10">
      <Outlet context={[value, setValue]} />
    </div>
  );
}

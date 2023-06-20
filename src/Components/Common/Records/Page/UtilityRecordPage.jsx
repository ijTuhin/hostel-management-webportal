import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import token from "../../../../Utilities/Hooks/CommonHooks";

const UtilityRecordPage = () => {
  const [data, setData] = useState();
  const location = useLocation();
  const link = location?.state?.data;
  useEffect(() => {
    fetch(link, { headers: { Authorization: `Beared ${token}` } })
      .then((res) => res.json())
      .then((i) => setData(i));
  }, []);
  console.log(data);
  return (
    <div>
      UtilityRecordPage {link} {/* {data[0].month} */}
      {data?.map((i) => (
        <>{i.month}</>
      ))}
    </div>
  );
};

export default UtilityRecordPage;

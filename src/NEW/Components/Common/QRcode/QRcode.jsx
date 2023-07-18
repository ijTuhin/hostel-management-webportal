import React from "react";
import QRCode from "react-qr-code";
import { useAuthUser } from "../../../../Authentications/Authenticate/UserContext";
import { meal, role } from "../../../Hooks/conditionData";
import { useNavigate } from "react-router-dom";

export default function QRcode() {
  let item;
  const navigate = useNavigate();
  const { qrCodeValueGenerator } = useAuthUser();
  const qrCode = qrCodeValueGenerator();
  if (role === "warden") item = "Attendance";
  else if (role === "meal") item = meal;
  return (
    <div className="flex flex-col justify-start items-center gap-y-20 h-screen bg-slate-900 text-gray-400 text-2xl">
      <header className="w-screen p-5 text-sm">
        <button
          onClick={() => navigate("/", { replace: true })}
          className="hover:text-green-400 text-gray-500 font-medium"
        >
          Go back
        </button>
      </header>
      <div className="text-center space-y-5">
        {item && (
          <>
            <p>
              Scan to{" "}
              {role === "warden" ? "Mark Attendance" : `Receive ${item} meal`}
            </p>
            <div className="p-10 bg-white rounded-xl">
              <QRCode
                title="GeeksForGeeks"
                value={qrCode}
                bgColor="#FFFFFF"
                fgColor="#000000"
                size={256}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

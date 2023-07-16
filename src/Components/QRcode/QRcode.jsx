import React from "react";
import QRCode from "react-qr-code";
import { useAuthUser } from "../../Authentications/Authenticate/UserContext";

export default function QRcode() {
  const {qrCodeValueGenerator} = useAuthUser();
  const qrCode = qrCodeValueGenerator()

  return (
    <div className="flex justify-center items-center gap-5 h-screen bg-white text-2xl">
      {qrCode}
      <div>
        <QRCode
          title="GeeksForGeeks"
          value={qrCode}
          bgColor="#FFFFFF"
          fgColor="#000000"
          size={256}
        />
      </div>
    </div>
  );
}

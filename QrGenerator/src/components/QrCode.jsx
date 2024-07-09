import { useState } from "react";
import "../css/qrcode.css";

const QrCode = () => {
  //  const []=useState();
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [qrData, setQrData] = useState("");
  const [qrSize,setQrSize]=useState("150")

  const generate = async () => {
    setLoading(true);
    try {
      const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
  
      const response = await fetch(qrUrl);
      if (!response.ok) {
        throw new Error('Failed to generate QR code');
      }
  
      const imageUrl = await response.url; // Get the actual image URL
      setImg(imageUrl); // Assuming setImg is a state setter function
  
    } catch (error) {
      console.error("Error generating QR code ", error);
    } finally {
      setLoading(false);
    }
  };
  

  const downloadQr = () => {
    fetch(img).then((resp)=>resp.blob()).then((blob)=>{
      const link=document.createElement("a");
      link.href=URL.createObjectURL(blob);
      link.download='qrcode.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }).catch((error)=>{
      console.error("Error generating QR code : ",error);
    })
  };

  return (
    <>
      <div className="app-container">
        <h1>QR Code generator </h1>
        {loading && <p>Please wait....</p>}
        {img && <img  src={img}  alt="" className="qr-code-img" />}
        <div>
          <label htmlFor="dataInput" className="input-label">
            Data for QR code:{" "}
          </label>
          <input
            type="text"
            value={qrData}
            id="dataInput"
            placeholder="Enter data for QR code"
            onChange={(e)=>setQrData(e.target.value)}
          />
          <label htmlFor="sizeInput"
           className="input-label"
           
           >
            Image size (e.g.,150){" "}
          </label>
          <input type="text" id="sizeInput" 
           value={qrSize}
           placeholder="Enter the size of img"
           onChange={(e)=>setQrSize(e.target.value)}
           />
          <button className="gn-btn" disabled={loading} onClick={generate}>
            Generate QR Code
          </button>
          <button className="down-btn" onClick={downloadQr}>Download QR Code</button>
        </div>
        <p className="footer">
          Desingned by{" "}
          <a target="_blank" href="https://surendarkumar.netlify.app/">
            Surendarkumar
          </a>
        </p>
      </div>
    </>
  );
};

export default QrCode;

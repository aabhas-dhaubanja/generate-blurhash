import { useState } from "react";
import "./App.css";
import generateBlurHash from "./generateBlurHash";

function App() {
  const [hash, setHash] = useState("");

  const _handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setHash("loading");
    const file = e.target?.files?.[0];

    if (file) {
      const blobURL = URL.createObjectURL(file);
      const hash = await generateBlurHash(blobURL);
      setHash(String(hash));
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 200 }}>
      <input
        placeholder="upload file"
        type="file"
        onChange={_handleFileUpload}
      />
      {!hash ? null : hash?.length < 11 ? "loading..." : `HASH : ${hash}`}
    </div>
  );
}

export default App;

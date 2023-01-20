import React, { useState } from "react";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Viewer } from "@react-pdf-viewer/core";
export default function User() {
  const [url, setUrl] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      files.length > 0 && setUrl(URL.createObjectURL(files[0]));
    }
  };
  
  return (
    <div>
      <input type="file" accept=".pdf" onChange={onChange} />
    </div>
  );
}

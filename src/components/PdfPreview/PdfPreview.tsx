import React from "react";
import ReactFilePreviewer from "react-file-previewer";

const PdfPreview: React.FC<{
  file: string | ArrayBuffer | null;
  name: string | null;
}> = ({ file }) => {
  return (
    <div className=" ">
      <ReactFilePreviewer
        file={{
          data: file,
          mimeType: "application/pdf",
          name,
        }}
      />
    </div>
  );
};

export default PdfPreview;

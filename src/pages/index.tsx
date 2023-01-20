import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { NextPage } from "next/types";
import { TOAST_STYLE } from "@/lib/constants";
import { getBase64 } from "@/lib/utils";
import { submitPdf } from "@/lib/services";

const User: NextPage = () => {
  const [file, setFile] = useState<any>(null);
  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const fileToLoad = files[0];
      const base64 = await getBase64(fileToLoad);
      setFile(base64);
    }
  };

  const submitFile = () => {
    if (!file) {
      toast.error("Please select a file first", TOAST_STYLE);
      return;
    } else {
      submitPdf(file);
    }
  };

  useEffect(() => {
    console.log({ file });
  }, [file]);

  return (
    <div className="w-full flex items-center justify-center flex-col">
      <input
        className="bg-main mt-10 p-1 rounded"
        type="file"
        accept=".pdf"
        onChange={onChange}
      />
      <button
        className="my-5 bg-main text-xl text-white px-10 py-1 rounded "
        onClick={submitFile}
      >
        Submit
      </button>
      {file && <embed src={`${file}`} className="w-1/2 h-[100vh] " />}̀
    </div>
  );
};

export default User;

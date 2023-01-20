import { copyToClipboard } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import { PdfData } from "../../lib/models";

const PdfCard: React.FC<PdfData> = (props) => {
  return (
    <div className="bg-orange-50 p-2 rounded m-2 border border-[1px] flex flex-col items-center ">
      <div className="flex  items-center justify-between w-full ">
        <h1>
          ID: {props._id}{" "}
          <span
            className="cursor-pointer"
            onClick={() => {
              copyToClipboard(props?._id);
            }}
          >
            📋
          </span>
        </h1>
        {/* {props.reviewed && <h2 className="flex-wrap">{props?.review}</h2>} */}
        <Link href={`/admin/${props._id}`}>
          <button className="bg-main px-2  py-1   rounded ">
            {props.reviewed ? "Update" : "Review"}
          </button>
        </Link>
      </div>
      <h1 className="mt-2 text-start w-full text-gray-700">{props?.review}</h1>
    </div>
  );
};

export default PdfCard;

import Link from "next/link";
import React, { useState } from "react";
import { PdfData } from "../../lib/models";

const PdfCard: React.FC<PdfData> = (props) => {
  return (
    <div className="bg-orange-50 p-2 rounded m-2 border border-[1px] flex  items-center justify-between ">
      <h1>ID: {props._id}</h1>
      {props.reviewed && <h2 className="flex-wrap">{props?.review}</h2>}
      {!props.reviewed && (
        <Link href={`/admin/${props._id}`}>
          <button className="bg-main px-2  py-1   rounded ">Review</button>
        </Link>
      )}
    </div>
  );
};

export default PdfCard;

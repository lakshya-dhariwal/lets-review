import { useState } from "react";
import { getPdfById, updatePdfById } from "@/lib/services";
import { copyToClipboard } from "@/lib/utils";
import { NextPage } from "next/types";
import { PdfData } from "../../lib/models";
import toast from "react-hot-toast";
import { TOAST_STYLE } from "../../lib/constants";

export async function getServerSideProps({ params }: any) {
  const { id } = params;
  const pdf = await getPdfById(id);
  return {
    props: { pdf },
  };
}

const Review: NextPage<{ pdf: PdfData }> = ({ pdf }) => {
  const [submitting, setSubmitting] = useState(false);
  const [review, setReview] = useState("");
  const submitHandler = async () => {
    setSubmitting(true);
    try {
      await updatePdfById({ review, ...pdf });
      toast("Review Submitted", TOAST_STYLE);
    } catch (error) {
      toast.error("Error while submitting", TOAST_STYLE);
    }
    setSubmitting(false);
  };

  return (
    <div className="w-full flex items-center flex-col">
      <h1 className="text-center m-3 text-2xl font-semibold">
        ID: {pdf?._id}{" "}
        <span
          className="cursor-pointer"
          onClick={() => {
            copyToClipboard(pdf?._id);
          }}
        >
          📋
        </span>
      </h1>
      <div className="mb-6 w-1/2">
        <label
          htmlFor="large-input"
          className="block mb-2 text-lg font-medium text-gray-900 "
        >
          Review
        </label>
        <input
          type="text"
          value={review}
          onChange={(e) => {
            setReview(e?.target?.value);
          }}
          id="large-input"
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-yellow-500 focus:border-yellow-500 "
        />
      </div>
      <button
        className={` rounded p-2  px-10 text-xl cursor-pointer ${
          submitting ? " bg-yellow-600" : " bg-main"
        }`}
        onClick={submitHandler}
        disabled={submitting}
      >
        Submit
      </button>
    </div>
  );
};

export default Review;

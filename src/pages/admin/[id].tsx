import { getPdfById } from "@/lib/services";
import { NextPage } from "next/types";
import { PdfData } from "../../lib/models";

export async function getServerSideProps({ params }: any) {
  const { id } = params;
  const pdf = await getPdfById(id);
  return {
    props: { pdf },
  };
}

const Review: NextPage<{ pdf: PdfData }> = ({ pdf }) => {
  return (
    <>
      <h1>{pdf?._id}</h1>
    </>
  );
};

export default Review;

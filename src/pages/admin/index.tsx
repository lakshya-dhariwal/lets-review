import { useState } from "react";
import { PdfData } from "@/lib/models";
import { getAllPdfs } from "../../lib/services";
import PdfCard from "../../components/PdfCard/PdfCard";
import { NextPage } from "next/types";

export async function getServerSideProps() {
  const data = await getAllPdfs();
  return {
    props: { pdfs: data },
  };
}
const TABS = {
  PENDING: "Pending",
  REVIEWED: "Reviewed",
};
const Admin: NextPage<{ pdfs: Array<PdfData> | undefined }> = ({ pdfs }) => {
  const [tab, setTab] = useState(TABS.PENDING);
  return (
    <div className="w-full">
      {!pdfs ? (
        <h1 className="text-2xl text-main text-center">No Pdfs Found</h1>
      ) : (
        <div>
          <div className="flex m-2">
            <div
              className={`${
                tab === TABS.PENDING ? " bg-main text-title  " : " bg-grey  "
              }  text-sm rounded-tl-md  cursor-pointer p-1 px-2`}
              onClick={() => setTab(TABS.PENDING)}
            >
              {TABS.PENDING}
            </div>
            <div
              className={`${
                tab === TABS.REVIEWED
                  ? " bg-main text-title "
                  : " bg-grey border-t-0 border-b-0 border-r-0  "
              } rounded-tr-md text-sm  cursor-pointer p-1 px-2`}
              onClick={() => setTab(TABS.REVIEWED)}
            >
              {TABS.REVIEWED}
            </div>
          </div>
          <div className="mx-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {pdfs.map((pdf) => {
              if (tab === TABS.PENDING && !pdf.reviewed) {
                //show review pending pdfs when selected tab is 'pending'
                return <PdfCard key={pdf._id} {...pdf} />;
              } else if (tab === TABS.REVIEWED && pdf.reviewed) {
                console.log(pdf);
                //show reviewed pdfs when selected tab is 'reviewed'
                return <PdfCard key={pdf._id} {...pdf} />;
              }
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;

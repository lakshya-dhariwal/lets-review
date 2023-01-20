import { PdfData } from "@/lib/models";
import axios from "axios";
import { getAllPdfs } from "../lib/services";

export async function getServerSideProps() {
  const pdfs = await getAllPdfs();
  return {
    props: { pdfs },
  };
}
const Admin: React.FC<{ pdfs: Array<PdfData> | undefined }> = ({ pdfs }) => {
  console.log({ pdfs });
  return (
    <div className="w-full">
      {!pdfs ? (
        <h1 className="text-2xl text-main text-center">No Pdfs Found</h1>
      ) : (
        <div>
          <h1></h1>
        </div>
      )}
    </div>
  );
};

export default Admin;

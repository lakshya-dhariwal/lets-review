import axios from "axios";
import { SERVER, TOAST_STYLE } from "./constants";
import toast from "react-hot-toast";
import { PdfData } from "./models";

export const getAllPdfs = async () => {
  try {
    const res = await axios.get(`${SERVER}/api/pdf`);
    return res.data.data as Array<PdfData>;
  } catch (error) {
    console.log("Error in getAllPdfs", error);
  }
};
export const submitPdf = async (file: string) => {
  try {
    axios.post("/api/pdf", { file, reviewed: false });
    toast.success("File submitted for review", TOAST_STYLE);
  } catch (error) {
    toast.error("Unable to submit file", TOAST_STYLE);
  }
};
export const getPdfById = async (id: string) => {
  try {
    const res = await axios.get(`${SERVER}/api/pdf/${id}`);
    return res.data as PdfData;
  } catch (error) {
    console.log("Error in getAllPdfs", error);
  }
};

export const updatePdfById = async (body: PdfData) => {
  try {
    const res = await axios.post(`${SERVER}/api/pdf/${body._id}`, body);
    return res.data as PdfData;
  } catch (error) {
    console.log("Error in getAllPdfs", error);
  }
};

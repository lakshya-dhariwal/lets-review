import axios from "axios";
import { SERVER } from "./constants";
import { PdfData } from "./models";

export const getAllPdfs = async () => {
  try {
    const res = await axios.get(`${SERVER}/api/pdf`);
    return res.data.data as Array<PdfData>;
  } catch (error) {
    console.log("Error in getAllPdfs", error);
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

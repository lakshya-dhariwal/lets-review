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

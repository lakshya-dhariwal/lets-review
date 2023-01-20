import toast from "react-hot-toast";
import { TOAST_STYLE } from "./constants";

export const getBase64 = (file: File) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
  toast("Copied to Clipboard", TOAST_STYLE);
};

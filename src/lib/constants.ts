export const TOAST_STYLE = {
  style: {
    borderRadius: "30px",
    background: "#333",
    color: "#fff",
  },
};

const dev = process.env.NODE_ENV !== "production";

export const SERVER = dev
  ? "http://localhost:3000"
  : "https://lets-review-lakshya.vercel.app/";

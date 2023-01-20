import Nav from "@/components/Nav";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="font-lato">
      <Toaster reverseOrder={false} />
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

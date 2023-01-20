import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import PageLoading from "@/components/PageLoading";
import Nav from "@/components/Nav";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isAnimating, setIsAnimating] = useState(false);
  useEffect(() => {
    const handleStart = () => {
      setIsAnimating(true);
    };
    const handleStop = () => {
      setIsAnimating(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    //cleanup
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);
  return (
    <div className="font-lato h-full">
      <Toaster reverseOrder={false} />
      <Nav />
      <PageLoading isAnimating={isAnimating} />
      <Component {...pageProps} />
    </div>
  );
}

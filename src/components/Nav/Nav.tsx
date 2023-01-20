import React from "react";
import NextLink from "next/link";

function Nav() {
  return (
    <div className="flex justify-around py-2 border-0 border-b-[1px] ">
      <h1 className="text-2xl m-1 font-semibold ">✏️ ReviewIt</h1>
      <div className="flex items-center">
        <NextLink href="/">
          <h2 className="mx-2 hover:text-main">User</h2>
        </NextLink>
        <NextLink href="/admin">
          <h2 className="mx-2 hover:text-main">Admin</h2>
        </NextLink>
      </div>
    </div>
  );
}

export default Nav;

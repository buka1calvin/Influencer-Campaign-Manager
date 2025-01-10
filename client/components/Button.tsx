import Link from "next/link";
import React from "react";

const Button = ({title}:{title:string}) => {
  return (
    <Link
      href="/sign-up"
      className="relative overflow-hidden inline-flex group items-center justify-center px-3.5 py-1 m-1 cursor-pointer border-b-4 border-l-2 active:border-green-600 active:shadow-none shadow-lg bg-gradient-to-tr from-green-600 to-green-500 border-green-700/20 text-white"
    >
      <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
      <span className="relative text-sm mt-[3px]">{title}</span>
    </Link>
  );
};

export default Button;

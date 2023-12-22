import Image from "next/image";
import Link from "next/link";
import React from "react";

const BackLink = (props: {
  href: string;
  children: string;
  removeToken?: any;
}) => {
  const { href, children, removeToken } = props;

  return (
    <Link
      href={href}
      className="flex items-center gap-2 font-semibold"
      onClick={
        removeToken
          ? () => {
              removeToken("quizToken");
            }
          : () => {}
      }
    >
      <Image src={"/arrow-left.svg"} alt="left-arrow" width={24} height={24} />
      <span className="hidden text-sm font-semibold md:inline-block">
        {children}
      </span>
      <span className="text-sm font-semibold md:hidden">Kembali</span>
    </Link>
  );
};

export default BackLink;

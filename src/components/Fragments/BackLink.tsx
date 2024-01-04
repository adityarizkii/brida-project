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
      <div className="relative h-4 w-4 lg:h-6 lg:w-6">
        <Image
          src={"/arrow-left.svg"}
          alt="left-arrow"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <span className="hidden font-semibold md:inline-block">{children}</span>
      <span className="text-sm font-semibold md:hidden">Kembali</span>
    </Link>
  );
};

export default BackLink;

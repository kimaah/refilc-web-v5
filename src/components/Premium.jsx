import Image from "next/image";
import React from "react";

const Premium = () => {
  return (
    <div className="my-5 snap-always snap-center">
      <div className="flex flex-col xl:flex-row items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/icon/star.svg"
            alt="star"
            width={42}
            height={42}
            className="rounded-[12px]"
          />
          <h1 className="h1 w-[16rem] text-center">
            Prémiumunk is van, de ez olcsó.
          </h1>
          <p className="text-center xl:w-[36rem] w-[90%] font-medium text-[18px] font-figtree">
            A reFilc+ csak 1€, a reFilc+ gold pedig 3€ havonta.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Premium;

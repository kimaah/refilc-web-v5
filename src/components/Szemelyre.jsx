"use client";

import { motion, transform, useInView } from "framer-motion";
import Image from "next/image";

const Szemelyre = () => {
  return (
    <div className="my-5 xl:mt-0 snap-always snap-center">
      <div className="flex flex-col xl:flex-row items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, type: "tween" }}
          // viewport={{ once: true }}
          className=" xl:absolute gap-[10px] flex flex-col items-center text-center xl:text-left xl:items-start w-25 xl:ml-[60%]"
        >
          <Image
            src="/icon/paint.svg"
            alt="paint"
            width={42}
            height={42}
            className="rounded-[12px]"
          />
          <h1 className="h1">Szabd személyre a refilcedet.</h1>
          <p className="font-figtree text-[18px] font-medium ">
            Elbűvölően személyre szabható órarendünktől a tanáraid is hátast
            dobnak. Lyukas órák, számonkérések, szünetek, minden egy helyen, ha
            szeretnéd.
          </p>
        </motion.div>
        <div className="py-[3rem] flex items-center justify-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, type: "tween" }}
            viewport={{ once: true }}
          >
            <Image
              src="/mockup/szemelyre.svg"
              width={375}
              height={810}
              alt="mockup"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Szemelyre;

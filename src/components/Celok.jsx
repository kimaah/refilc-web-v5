"use client";

import { useRef } from "react";
import { motion, transform, useInView } from "framer-motion";
import Image from "next/image";

const Celok = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="overflow-x-hidden my-5 xl:mt-0 snap-always snap-center">
      <div className="flex flex-col xl:flex-row items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, type: "tween" }}
          // viewport={{ once: true }}
          className=" xl:absolute gap-[10px] items-center text-center xl:text-left xl:items-start flex flex-col w-25 xl:mr-[60%]"
        >
          <Image
            src="/icon/flag.svg"
            alt="bookmark"
            width={42}
            height={42}
            className="rounded-[12px]"
          />
          <h1 className="h1">
            Kövesd a céljaidat, és legyen a matek egyesből matek ötös.
          </h1>
          <p className="font-figtree text-[18px] font-medium ">
            Állítsd be a célodat, és mi megmondjuk, hányas jegyet kell
            szerezned. Még konfetti is van a cél elérésekor .
          </p>
        </motion.div>
        <div className="py-[3rem] flex items-center justify-center">
          <motion.div
            initial={{
              opacity: 0,
              x: 100,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, type: "tween" }}
            viewport={{ once: true }}
          >
            <Image
              src="/mockup/tantargyak.svg"
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
export default Celok;

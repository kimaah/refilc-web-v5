"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Main = () => {
  return (
    <div className="overflow-x-hidden my-5 xl:mt-[-25%] snap-always snap-center">
      <div className="flex flex-col xl:flex-row items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, type: "tween" }}
          className=" xl:absolute gap-[10px] flex flex-col items-center text-center xl:text-left xl:items-start w-25 xl:mr-[60%]"
        >
          <Image
            src="/icon/bookmark.svg"
            alt="bookmark"
            width={42}
            height={42}
            className="rounded-[12px]"
          />
          <h1 className="h1">A romló tendenciádat tízféle képpen láthatod</h1>
          <p className="font-figtree text-[18px] font-medium ">
            Annyi statisztikát kapsz, hogy a 8 általánosos matek nem lesz elég a
            kisilabizálására.
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
            viewport={{ once: false }}
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
export default Main;

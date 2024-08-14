"use client";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useScroll } from "framer-motion";

const Hero = () => {
  const { scrollY } = useScroll();

  // Responsive scale based on viewport width
  const screenWidth = useScroll(({ viewport }) => viewport.width);
  const scale = useTransform(
    scrollY,
    [0, 500],
    screenWidth > 768 ? [1, 0.8] : [1, 0.4] // Adjust breakpoints as needed
  );

  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (window.matchMedia("(max-width: 768px)").matches) {
        // Mobil nézet
        if (scrollTop >= 600) {
          setShowText(true);
        } else {
          setShowText(false);
        }
      } else {
        // Asztali nézet
        if (scrollTop >= 900) {
          setShowText(true);
        } else {
          setShowText(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="overflow-x-hidden overflow-y-hidden flex flex-col justify-center items-center text-center pt-[9rem] xl:pt-[12rem] snap-always snap-start">
      {/* milliard */}
      <p className="flex bg-secondary font-medium rounded-[40px] py-2 px-4 leading-5 h-[45px] w-[276px] font-figtree items-center justify-center">
        40+ milliárd forintért nem sikerült
      </p>
      <h1 className="title text-[#050B15] items-center flex flex-col">
        Kell egy jobb{" "}
        <div className="flex flex-row items-baseline">
          e-KRÉTA{" "}
          <Image
            src="./icon.svg"
            alt="icon"
            className="rotate-12 shadow-md rounded-full"
            width={30}
            height={30}
          />
        </div>
      </h1>
      <p className="text-center xl:w-[36rem] w-[90%] font-medium text-[18px] font-figtree">
        A reFilc folytatja, amit a Filc Napló és a Szivacs Napló elkezdett: egy
        diákoknak elkészült e-KRÉTA kliens, ami szép és hasznos is.
      </p>
      <Button className="bg-[#3673EE] text-white mt-5 w-22 rounded-[22px]">
        Letöltés
      </Button>

      <div className="flex flex-col xl:flex-row items-center justify-center gap-[120px]">
        <div className="image_carousel py-[3rem] flex items-center justify-center">
          <motion.div style={{ scale }} viewport={{ once: true }}>
            <Image
              src="/mockup/mockup2.svg"
              width={810} // Adjust image width as needed for smaller screens
              height={600}
              alt="mockup"
            />
          </motion.div>
        </div>
      </div>
      {showText && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          // viewport={{ once: true }}
          className=" xl:absolute gap-[10px] flex flex-col items-center text-center xl:text-left xl:items-start w-25 mt-[-55%] xl:mt-[30%] xl:ml-[60%] "
        >
          <Image
            src="/icon/home.svg"
            alt="home"
            width={42}
            height={42}
            className="rounded-[12px]"
          />
          <h1 className="h1">Ez a te kis otthonod</h1>
          <p className="font-figtree text-[18px] font-medium ">
            A nap nézetben mindent megtalálsz, amire szükséged van iskola előtt,
            közben, és után.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default Hero;

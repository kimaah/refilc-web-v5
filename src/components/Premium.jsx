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

          <div className="grid grid-cols-2 gap-8 mt-8">
            <div className="flex flex-col card">
              <h2 className="text-2xl font-bold ml-4 text-black top-4 relative">
                App ikonok
              </h2>
              <Image
                src="/icon/appicon.svg"
                alt="app icon"
                width={315}
                height={300}
              />
            </div>

            <div className="flex flex-col card">
              <h2 className="text-2xl font-bold ml-4 text-black top-4 relative">
                Összesített átlagszámolás
              </h2>
              <Image
                src="/icon/atlag.svg"
                alt="atlag"
                width={315}
                height={300}
              />
            </div>
            <div className="flex flex-col card">
              <h2 className="text-2xl font-bold ml-4 text-black top-4 relative">
                Egyedi betűtípusok
              </h2>
              <Image
                src="/icon/betutipus.svg"
                alt="betutipus"
                width={315}
                height={300}
              />
            </div>
            <div className="flex flex-col card">
              <h2 className="text-2xl font-bold ml-4 text-black top-4 relative">
                Fejlettebb cél kitűzés
              </h2>
              <Image src="/icon/cel.svg" alt="cel" width={315} height={300} />
            </div>
            <div className="flex flex-col card">
              <h2 className="text-2xl font-bold ml-4 text-black top-4 relative">
                Naptár szinkronizálás
              </h2>
              <Image
                src="/icon/sync.svg"
                alt="sync"
                width={315}
                height={300}
                className="mt-[-33px]"
              />
            </div>
            <div className="flex flex-col card">
              <h2 className="text-2xl font-bold ml-4 text-black top-4 relative">
                És még sok más
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;

import React from "react";
import Image from "next/image";
const HeroBanner = () => {
  return (
    <section className="relative px-0">
      <div className=" w-full my-12">
        <Image
          width={1500}
          height={530}
          className="w-full"
          src={"/hero_bmw_ix_front_step06_rgb_20_281_29.jpg"}
          alt={"hero banner"}
        />
        <div className="absolute flex flex-col justify-end top-0 left-0 w-full h-full pb-24 text-white text-left ">
          <h2 className="drop-shadow-lg">
            ALL THE FUN WITH NONE OF THE EMISSIONS
          </h2>
          <p>Discover electric cars with AutoGreen</p>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

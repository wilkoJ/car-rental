import React from "react";
import Image from "next/image";
const Description = () => {
  return (
    <section className="h-screen w-full relative bg-green-100">
      <div id="container" className="container">
        <Image
          width={600}
          height={600}
          className="right-0 absolute hidden md:block"
          src="/background_car.png"
          alt="fleet"
        />
        <div
          id="hero_content"
          className="flex items-center h-screen relative w-full p-4"
        >
          <div
            id="hero_content_text"
            className="flex flex-col md:max-w-xl z-10"
          >
            <h3>Plan your trip now</h3>
            <h1>Save the planet with our car rental</h1>
            <p className="text-center my-3">
              Rent the car of your dreams and go green. Unbeatable prices,
              unlimited miles, flexible pick-up options and much more
            </p>
            <div className="flex justify-center gap-2 my-3">
              <button type="button" className="primaryButton">
                Book Ride
              </button>
              <button className="text-white bg-black border shadow-lg font-medium rounded-sm text-sm px-5 py-3 text-center hover:bg-white hover:text-black hover:border-black">
                Learn More
              </button>
            </div>
          </div>{" "}
          <div
            style={{ aspectRatio: 70 / 42 }}
            className="hidden md:block absolute w-2/4 right-0 z-0"
          >
            <Image fill className="image" src="/fleet_car.png" alt="fleet" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;

"use client";
import ICars, { defaultCar } from "@/models/ICars";
import React, { useEffect, useState } from "react";
import Image from "next/image";
const CarsDisplay = () => {
  const [cars, setCars] = useState<ICars[]>([]);
  const [selectedCar, setSelectedCar] = useState<ICars>(defaultCar);

  console.log("rerendered");
  const fetchData = async () => {
    try {
      const data = await fetch("/cars");
      const res = await data.json();
      setCars(res.data);
    } catch (e) {
      console.log(e);
      //add fallback logic
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="relative">
      <div className="container">
        <div className="justify-between items-center md:flex-row flex-col flex p-12 mt-12">
          <div className="flex flex-col gap-2">
            {cars.map((car, index) => {
              return (
                <button
                  onClick={() => {
                    setSelectedCar(car);
                  }}
                  key={index}
                  className={`${
                    selectedCar.name === car.name
                      ? "primaryButton"
                      : "secondaryButton"
                  }`}
                >
                  {car.name}
                </button>
              );
            })}
          </div>
          <div className="relative w-3/4 transition-opacity opacity-1">
            <Image
              width={400}
              height={350}
              className="w-full h-auto mt-4 "
              src={selectedCar.img}
              alt={selectedCar.name}
            />
          </div>

          <div className="flex flex-col md:w-96">
            <div className="w-full primaryBg text-white text-center py-4 ">
              <p>
                <b>{selectedCar.price}$</b> / rent per day
              </p>
            </div>
            <div className="specTab">
              <span className="cell cellKey">{"Model"}</span>
              <span className="cell">{selectedCar.name}</span>
            </div>
            <div className="specTab">
              <span className="cell cellKey">{"Mark"}</span>
              <span className="cell">{selectedCar.mark}</span>
            </div>
            <div className="specTab">
              <span className="cell cellKey">{"Autonomie"}</span>
              <span className="cell">{selectedCar.batterie}</span>
            </div>
            <div className="specTab">
              <span className="cell cellKey">{"Seats"}</span>
              <span className="cell">{selectedCar.seats}</span>
            </div>
            <div className="specTab">
              <span className="cell cellKey">{"Bags"}</span>
              <span className="cell">{selectedCar.bags}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarsDisplay;

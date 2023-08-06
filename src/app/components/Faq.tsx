"use client";
import React, { useEffect, useState } from "react";
import IFaq from "@/models/IFaq";

type IProps = {
  isActive: boolean;
  index: number;
  faq: IFaq;
  onClick: (index: number) => void;
};
export const Question = ({ isActive = false, faq, index, onClick }: IProps) => {
  return (
    <div className="w-full">
      <div
        className={`${
          isActive
            ? "bg-green-500 text-white shadow-sm shadow-green-500   "
            : ""
        } flex cursor-pointer items-center justify-between px-5 py-2 shadow`}
        onClick={() => {
          if (!isActive) onClick(index);
          else {
            onClick(-1);
          }
        }}
      >
        <h3 className="text-center">{faq.title}</h3>
        <div
          className={`${
            isActive ? "rotate-180" : "rotate-0"
          }  transition-transform`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`${isActive ? "rotate-180" : ""}w-6 h-6  transition-all`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
      <div
        className={
          isActive
            ? "max-h-80 p-4 transition-all"
            : "max-h-0 overflow-hidden transition-all"
        }
      >
        <p className="text-left">{faq.content}</p>
      </div>
    </div>
  );
};

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [faq, setFaq] = useState<IFaq[]>([]);
  const arrayToFill = Array(4).fill(0);

  const fetchData = async () => {
    const data = await fetch("/faq");
    const res = await data.json();
    console.log(res.data);
    setFaq(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className="w-full relative">
      <div id="container" className="container">
        <div>
          <h2 className=" my-4">Frequently Asked Question</h2>
          <p className="mb-4">
            Frequently Asked Questions About the Car Rental Booking Process on
            Our Website: Answers to Common Concerns and Inquiries.
          </p>
        </div>
        <div className="flex flex-col md:max-w-5xl m-auto items-center  shadow-lg shadow-gray-300 mb-16">
          {faq.map((value: IFaq, index) => {
            return (
              <Question
                key={index}
                faq={value}
                isActive={index === activeIndex}
                onClick={(newIndex: number) => {
                  setActiveIndex(newIndex);
                }}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;

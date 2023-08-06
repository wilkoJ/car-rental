"use client";
import React from "react";
import DatePicker from "./SearchInputs/DatePicker";
import Select from "./SearchInputs/Select";
import { Calendar, MapPin } from "./Assets/Icons";

const Search = () => {
  return (
    <section className="relative bg-gradient-to-b from-green-100  to-green-0">
      <div className="container">
        <div className="mx-auto mb-24">
          <div className=" flex flex-col h-auto w-full p-16 shadow-lg bg-white">
            <form
              className="grid gap-4 md:grid-cols-3"
              onSubmit={(e) => {
                console.log("searched");
                e.preventDefault();
              }}
            >
              <div className="formField">
                <label>
                  <MapPin /> Model <b className="primaryColor">*</b>
                </label>
                <Select />
              </div>
              <div className="formField">
                <label>
                  <MapPin /> Pick-Up <b className="primaryColor">*</b>
                </label>
                <Select />
              </div>
              <div className="formField">
                <label>
                  <MapPin /> Drop-Off <b className="primaryColor">*</b>
                </label>
                <Select />
              </div>
              <div className="formField">
                <label>
                  <Calendar /> Pick-Up Time <b className="primaryColor">*</b>
                </label>
                <DatePicker />
              </div>
              <div className="formField">
                <label>
                  <Calendar /> Drop-Off Time <b className="primaryColor">*</b>
                </label>
                <DatePicker />
              </div>
              <button className="primaryButton self-end" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;

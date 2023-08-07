"use client";
import React from "react";
import DatePicker from "./SearchInputs/DatePicker";
import Select from "./SearchInputs/Select";
import { Calendar, MapPin } from "./Assets/Icons";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Search = () => {
  const model = [
    "Tesla Model 3",
    "VW ID.3",
    "Luxury (Volovo XC40)",
    "Smart Fortwo electric",
    "Fiat 500 electric",
    "Mercedes-Benz EQS (Electric)",
  ];
  const cities = ["Paris", "Bordeaux", "Lille", "Nice", "Rennes"];

  const formSchema = z.object({
    model: z.string().refine((arg) => {
      return model.includes(arg);
    }, "Choose your model"),
    pickUp: z.string().refine((arg) => {
      return cities.includes(arg);
    }, "Choose your pick up city"),
    dropOff: z.string().refine((arg) => {
      return cities.includes(arg);
    }, "Choose your drop off city"),
    pickUpDate: z.coerce.date(),
    dropOffDate: z.coerce.date(),
  });
  type FormSchemaType = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const submitDate = (data: FormSchemaType) => {
    console.log(data);
  };

  return (
    <section className="relative bg-gradient-to-b from-green-100  to-green-0">
      <div className="container">
        <div className="mx-auto mb-24">
          <div className=" flex flex-col h-auto w-full p-16 shadow-lg bg-white">
            <form
              className="grid gap-4 md:grid-cols-3"
              onSubmit={handleSubmit(submitDate)}
            >
              <div className="formField">
                <label>
                  <MapPin /> Model <b className="primaryColor">*</b>
                </label>
                <Select
                  register={register}
                  id="model"
                  title="Select your model"
                  fields={model}
                />
              </div>
              <div className="formField">
                <label>
                  <MapPin /> Pick-Up <b className="primaryColor">*</b>
                </label>
                <Select
                  id="pickUp"
                  register={register}
                  title="Choose your pick up city"
                  fields={cities}
                />
              </div>
              <div className="formField">
                <label>
                  <MapPin /> Drop-Off <b className="primaryColor">*</b>
                </label>
                <Select
                  id="dropOff"
                  register={register}
                  title="Choose your Drop off city"
                  fields={cities}
                />
              </div>
              <div className="formField">
                <label>
                  <Calendar /> Pick-Up Time <b className="primaryColor">*</b>
                </label>
                <DatePicker id="pickUpDate" register={register} />
              </div>
              <div className="formField">
                <label>
                  <Calendar /> Drop-Off Time <b className="primaryColor">*</b>
                </label>
                <DatePicker id="dropOffDate" register={register} />
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

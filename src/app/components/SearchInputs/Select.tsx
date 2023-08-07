import React from "react";
type IProps = {
  id: string;
  title: string;
  fields: string[];
  register: any;
};
const Select = ({ id, title, fields, register }: IProps) => {
  return (
    <div>
      <select
        {...register(id)}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option disabled selected defaultValue={title}>
          {title}
        </option>
        {fields.map((value, index) => {
          return (
            <option key={index} value={value}>
              {value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;

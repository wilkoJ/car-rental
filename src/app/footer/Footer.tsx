import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div
          id="footer"
          className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 lg:grid-rows-none lg:grid-cols-4 gap-24 justify-center py-11 px-4"
        >
          <ul>
            <li className="text-2xl">
              <span className="font-bold uppercase">Electrical Car</span> Rental
            </li>
            <li>
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </li>
            <li>
              <a href="tel:(123) -456-789">(123) -456-789</a>
            </li>
            <li>
              <a href="mailto:autogrean@gmail.com">autogrean@gmail.com</a>
            </li>
          </ul>
          <ul>
            <li className="font-bold text-2xl uppercase">company</li>
            <li>
              <a href="#home">Paris</a>
            </li>
            <li>
              <a href="#home">Careers</a>
            </li>
            <li>
              <a href="#home">Mobile</a>
            </li>
            <li>
              <a href="#home">Blog</a>
            </li>
            <li>
              <a href="#home">How we work</a>
            </li>
          </ul>
          <ul>
            <li className=" font-bold text-2xl uppercase">working hours</li>
            <li>Mon - Fri: 9:00AM - 9:00PM</li>
            <li>Sat: 9:00AM - 19:00PM</li>
            <li>Sun: Closed</li>
          </ul>
          <ul>
            <li className="text-left font-bold text-2xl uppercase">
              Subscription
            </li>
            <li>Subscribe your Email address for latest news & updates.</li>
            <li>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Email Adress"
              />
            </li>
            <li>
              <button className="primaryButton w-full"> Submit</button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

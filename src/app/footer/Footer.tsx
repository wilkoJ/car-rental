import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div
          id="footer"
          className="grid grid-cols-4 gap-24 justify-center py-11 px-4"
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
            <li>
              <p className="text-left font-bold text-2xl uppercase">company</p>
            </li>
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
            <li>
              <p className="text-left font-bold text-2xl uppercase">
                working hours
              </p>
            </li>
            <li>
              <a href="#home">Mon - Fri: 9:00AM - 9:00PM</a>
            </li>
            <li>
              <a href="#home">Sat: 9:00AM - 19:00PM</a>
            </li>
            <li>
              <a href="#home">Sun: Closed</a>
            </li>
          </ul>
          <ul>
            <li>
              <p className="text-left font-bold text-2xl uppercase">
                Subscription
              </p>
            </li>
            <li>Subscribe your Email address for latest news & updates.</li>
            <li>
              <input type="text" placeholder="Enter Email Adress" />
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

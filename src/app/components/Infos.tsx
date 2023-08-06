import React from "react";

const Infos = () => {
  return (
    <section className="relative">
      <div className="container">
        <div className="flex flex-col">
          <h3>Plan your trip now</h3>
          <h2>Quick & easy car rental</h2>
          <div className="grid  md:grid-cols-3 mt-16 gap-4 p-5">
            <div className="flex flex-col">
              <h3>Car Selection</h3>
              <p>
                We offers a big range of electrical vehicles to keep the air
                fresh. Drive and keep the planet alive
              </p>
            </div>
            <div className="flex flex-col">
              <h3>Operators</h3>
              <p>
                Contact our operators whenever you need, they are ready to help!
              </p>
            </div>
            <div className="flex flex-col">
              <h3>{`Let's Ride`}</h3>
              <p>
                {`Whether you're hitting the open road, we've got you covered with
                our wide range of cars`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infos;

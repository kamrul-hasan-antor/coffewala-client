import React from "react";
import { Button } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="banner text-white">
      <div className="banner_content bg-primar d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h1>We offer a delicious variety of coffee</h1>
          <h3>
            We have everything from classic coffee to our house made specialty
            beverages.
          </h3>
          <Button variant="primary" className="px-5 mt-3 text-uppercase">
            Menu
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

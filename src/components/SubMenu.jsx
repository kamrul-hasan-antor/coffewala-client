import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const SubMenu = () => {
  const [coffes, setCoffes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getItems")
      .then((res) => res.json())
      .then((data) => setCoffes(data.slice(0, 3)));
  }, []);

  return (
    <div className="subMenu container">
      <h2 className="text-center mb-4">Our Popular Menu</h2>
      <div className="row gx-3">
        {coffes.map((coffe, i) => {
          const { name, price, description, image } = coffe;
          return (
            <div className="col-md-4" key={i}>
              <Card className="p-3 mt-3">
                <Card.Img
                  style={{ height: "15rem" }}
                  variant="top"
                  src={image}
                />
                <Card.Body>
                  <Card.Title className="text-uppercase">{name}</Card.Title>
                  <p className="mb-0">Price: ${price}</p>
                  <Card.Text>{description.slice(0, 145)}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
      <div className="mt-4 text-center">
        <Link to="/menu">
          <Button variant="primary">See More </Button>
        </Link>
      </div>
    </div>
  );
};

export default SubMenu;

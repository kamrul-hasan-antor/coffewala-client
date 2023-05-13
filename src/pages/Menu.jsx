import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getItems")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);
  console.log(menu);
  return (
    <div className="subMenu container">
      <div className="row gx-3">
        {menu.map((coffe, i) => {
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
                  <Button
                    onClick={() => alert("Order Done")}
                    variant="outline-primary"
                    className="w-100"
                  >
                    Order Now
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;

import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const SubMenu = () => {
  return (
    <div className="subMenu">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://xpressrow.com/html/cafena/cafena/assets/images/menu/menu-1.jpeg"
        />
        <Card.Body>
          <Card.Title className="text-uppercase">AmERICANO COFFEE</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Order Now</Button>
        </Card.Body>
      </Card>
      <div className="mt-4 text-center">
        <Link to="/menu">
          <Button variant="primary">See All Menu </Button>
        </Link>
      </div>
    </div>
  );
};

export default SubMenu;

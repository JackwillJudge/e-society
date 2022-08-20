import React from "react";
import { Container, Button } from "react-bootstrap";
import "../App.css";

export const Home = () => {
  return (
    <div className="mainContainer">
      <div className="align-middle text-center">
        <h1>Welcome To E-Society</h1>
        <p>The exclusive club for people with the letter 'E' in their name</p>

        <Button variant="outline-dark">View Members</Button>
      </div>
    </div>
  );
};

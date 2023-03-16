import React from "react";
import Products from "./Products";
import { Container } from "react-bootstrap";
const Home = () => {
  return (
    <Container>
      <h3 className="text-center">Our React-Redux Toolkit API</h3>
      <section>
        <Products />
      </section>
    </Container>
  );
};

export default Home;

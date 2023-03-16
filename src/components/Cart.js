import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import { remove } from "./store/cartSlice";
const Cart = () => {
  const product = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  return (
    <Container className="mt-5">
      <Row>
        {product.map((product) => {
          return (
            <Col md="6" key={product.id}>
              <div
                className="card mb-3 p-5 shadow-lg"
                style={{ maxWidth: "540px" }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={product.image}
                      className="img-fluid rounded-start"
                      alt="..."
                      style={{ width: "130px" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">${product.price}</p>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleRemove(product.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Cart;

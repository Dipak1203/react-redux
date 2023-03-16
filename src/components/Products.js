import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./store/cartSlice";
import {fetchProduct, STATUSES} from './store/ProductSlice'
const Products = () => {
  // const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const {data,status} = useSelector((state) => state.product)
  const fetchData = async () => {
    dispatch(fetchProduct())
  };

  const handleClick = (product) => {
    dispatch(add(product));
  };

 
  useEffect(() => {
    fetchData();
  }, []);


  if(status === STATUSES.LOADING){
    return <div className="text-center">
      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/b6e0b072897469.5bf6e79950d23.gif" className="img-fluid" />
    </div>
  }

  if(status === STATUSES.ERROR){
    return <h4>Something went wrong</h4>
  }


  return (
    <Row className="container">
      {data.map((ele) => {
        return (
          <Col md="4" key={ele.id}>
            <Card
              style={{ width: "18rem" }}
              className="shadow-lg py-3 text-center"
            >
              <Card.Img
                variant="top"
                src={ele.image}
                className="img-fluid m-auto"
                style={{ width: "130px" }}
              />
              <Card.Body>
                <Card.Title>{ele.title}</Card.Title>
                <Card.Text>$ {ele.price}</Card.Text>
                <Button variant="warning" onClick={() => handleClick(ele)}>
                  Add To Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default Products;

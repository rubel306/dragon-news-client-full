import React from "react";
import { Button } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const NewsDetails = () => {
  const news = useLoaderData();
  const { category_id, author, title, image_url, details } = news;
  return (
    <div>
      <img className="img-fluid" src={image_url} alt="" />
      <h2>{title}</h2>
      <p>{details}</p>
      <Button variant="danger">
        <Link
          className="text-decoration-none text-white"
          to={`/category/${category_id}`}
        >
          <FaArrowLeft></FaArrowLeft> All News In This Category
        </Link>
      </Button>
    </div>
  );
};

export default NewsDetails;

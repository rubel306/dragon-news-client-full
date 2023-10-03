import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  console.log("From news card", news);
  const { _id, author, title, image_url, details } = news;
  return (
    <div>
      <Card className="mb-5 ">
        <Card.Header className="d-flex align-items-center">
          <img
            className="rounded-circle"
            height="40px"
            src={author.img}
            alt=""
          />
          <div className="flex-grow-1 ps-3">
            <p>{author.name}</p>
            <p>{author.published_date}</p>
          </div>
          <div>
            <FaRegBookmark></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <img className="img-fluid" src={image_url} alt="" />
          <Card.Text>
            {details.length < 250 ? (
              <>{details}</>
            ) : (
              <>{details.slice(0, 250)}... </>
            )}
            <Link to={`/news/${_id}`}>Read More</Link>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;

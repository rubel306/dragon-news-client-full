import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

const Category = () => {
  const CatNews = useLoaderData();

  return (
    <div>
      <h2 className="mb-4">This category News:{CatNews.length} </h2>
      {CatNews.map((news) => (
        <NewsCard key="news._id" news={news}></NewsCard>
      ))}
    </div>
  );
};

export default Category;

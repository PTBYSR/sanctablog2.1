import React from "react";
import { Link, Outlet } from "react-router-dom";
import { AllNewsSection, AllNewsHeading } from "./AllNews.element";
import ListNewsPost from "./ListNewsPost/ListNewsPost";
import AL from "./a-illuminated.png";

function AllNews() {
  return (
    <AllNewsSection>
      <AllNewsHeading className="flex">
        <img src={AL} alt="A" />
        <div>
          <h1 className="fs-news-heading ff-cabazon text-red">ll News</h1>
          <ListNewsPost />
        </div>
      </AllNewsHeading>
    </AllNewsSection>
  );
}

export default AllNews;

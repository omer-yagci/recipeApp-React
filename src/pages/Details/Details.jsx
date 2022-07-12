import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Details = () => {
  const location = useLocation();

  const item = location.state;
  console.log("sasad", item);
  return <div>Details</div>;
};

export default Details;

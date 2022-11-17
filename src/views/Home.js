import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { ActivityContext } from "../context/ActivityProvider";

export default function Home() {
  const { activity, fetchData } = useContext(ActivityContext);

  return (
    <div className="main-container">
      <h1 style={{ textAlign: "center" }}>
        Find an Activity for your weekend!
      </h1>
      <Link
        style={{ color: "white", textDecoration: "none" }}
        to={`/activity/${activity.key}`}
      >
        <Button className="main-btn" variant="primary" onClick={fetchData}>
          Get Random Activity
        </Button>
      </Link>
    </div>
  );
}

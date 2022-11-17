import React from "react";
import { useContext } from "react";
import { ActivityContext } from "../context/ActivityProvider";

import Button from "react-bootstrap/Button";

export default function Activity() {
  const { activity, fetchData } = useContext(ActivityContext);

  return (
    <div className="activity-container">
      <h2>Your activity is here!</h2>
      <div>
        <p>
          <strong>Activity:</strong> {activity.activity}
        </p>
        <p>
          <strong>Type:</strong> {activity.type}
        </p>
        <p>
          <strong>Participants:</strong> {activity.participants}
        </p>
        <p>
          <strong>Price:</strong> {activity.price}
        </p>
      </div>
      <Button variant="primary" onClick={fetchData}>
        Find Another Activity
      </Button>
    </div>
  );
}

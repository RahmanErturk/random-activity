import React from "react";
import { useContext } from "react";
import { ActivityContext } from "../context/ActivityProvider";

export default function Error() {
  const { searchValue } = useContext(ActivityContext);

  return (
    <h2 className="error">Sorry! We can't find the type "{searchValue}"</h2>
  );
}

// {searchValue !== ""
// ? `Sorry! We can't find the type "${searchValue}"`
// : `You should give a type!!!`}

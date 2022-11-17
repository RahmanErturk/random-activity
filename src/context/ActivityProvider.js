import React from "react";
import { createContext, useState, useEffect } from "react";

export const ActivityContext = createContext();

export default function ActivityProvider(props) {
  const [activity, setActivity] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(`http://www.boredapi.com/api/activity/`);

      if (response.status !== 200) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();
      setActivity(result);
    } catch (error) {
      console.warn("Error fetching data");
    }
  };

  return (
    <ActivityContext.Provider
      value={{
        activity,
        setActivity,
        searchValue,
        setSearchValue,
        fetchData,
      }}
    >
      {props.children}
    </ActivityContext.Provider>
  );
}

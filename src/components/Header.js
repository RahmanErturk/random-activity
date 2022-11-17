import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { ActivityContext } from "../context/ActivityProvider";

export default function Header() {
  const { searchValue, setSearchValue, activity, setActivity } =
    useContext(ActivityContext);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://www.boredapi.com/api/activity?type=${searchValue.toLowerCase()}`
      );

      if (response.status !== 200) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      setActivity(result);
    } catch (error) {
      console.warn("Error fetching data");
    }
  };

  const activityType = [
    "education",
    "recreational",
    "social",
    "diy",
    "charity",
    "cooking",
    "relaxation",
    "music",
    "busywork",
  ];

  const filterActivity = activityType.filter((el) => el === searchValue);

  const linkFunc = () => {
    if (filterActivity.length > 0) {
      return `/activity/${activity.key}`;
    } else if (searchValue === "") {
      if (window.location.pathname === "/") {
        return "/";
      } else `/activity/${activity.key}`;
    } else {
      return "/type-error";
    }
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand className="mx-5">
          <Link style={{ textDecoration: "none", fontWeight: "500" }} to="/">
            Random Activity
          </Link>
        </Navbar.Brand>

        <Form className="d-flex mx-5">
          <Form.Control
            style={{ width: "300px" }}
            placeholder="Give type of activity (eg: education)"
            className="me-2"
            aria-label="Search"
            value={searchValue}
            onChange={handleChange}
          />
          <Link
            style={{ color: "unset", textDecoration: "none" }}
            to={
              // filterActivity.length > 0
              //   ? `/activity/${activity.key}`
              //   : "/type-error"
              linkFunc()
            }
          >
            <Button
              variant="outline-success"
              onClick={searchValue !== "" ? fetchData : null}
            >
              Search
            </Button>
          </Link>
        </Form>
      </Container>
    </Navbar>
  );
}

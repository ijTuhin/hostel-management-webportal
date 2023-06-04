import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  // Create new utility record on month change
  const data = useLoaderData();
  if (data.length === 0) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const m = new Date().getMonth();
    const previous = months[m - 1] + "-" + new Date().getFullYear();
    const [item, setitem] = useState([]);
    useEffect(() => {
      fetch(`http://localhost:3001/utility?month=${previous}`)
        .then((res) => res.json())
        .then((item) => {
          setitem(item);
        });
    }, []);
    const value = item.map((i) => {
      let items
      if(i.status){
        items = {
          due: {
            bill: i.status * i.bill,
            id: i._id
          },
          name: i.name,
        };
      }
      else {
        items = {
          name: i.name,
        };
      }
      return items;
    });
    fetch("http://localhost:3001/utility/new", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    })
      .then((response) => response.json())
      .then((item) => {
        console.log(item.item);
      });
  }
  return <></>;
};

export default Home;

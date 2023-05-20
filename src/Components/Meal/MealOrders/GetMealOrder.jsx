import { useEffect, useState } from "react";

const meal = "Lunch"
const [data, setData] = useState([]);
useEffect(() => {
    fetch(`http://localhost:3001/meal?meal=${meal}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

export {meal, data}
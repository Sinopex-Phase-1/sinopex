import { useState, useEffect } from "react";
import axios from "axios";

export default function Product() {
  const [res, setres] = useState([
    { name: "product name", price: "399.00" },
    { name: "product name", price: "399.00" },
    { name: "product name", price: "399.00" },
    { name: "product name", price: "399.00" },
    { name: "product name", price: "399.00" },
    { name: "product name", price: "399.00" },
    { name: "product name", price: "399.00" },
    { name: "product name", price: "399.00" },
  ]);

  async function getData() {
    const url = "https://henxing.up.railway.app/api/v1/products";

    await fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        setres(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return res;
}

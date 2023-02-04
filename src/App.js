import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Routes";
import { ProductContext } from "./context/Product";

export default function App() {
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
    // "https://henxing.up.railway.app/uploads/files/file-1674437720676.png" Image url

    await fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        setres(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <ProductContext.Provider value={res}>
      <RouterProvider router={router}></RouterProvider>
    </ProductContext.Provider>
  );
}

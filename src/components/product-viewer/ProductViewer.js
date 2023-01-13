import React, { useState, useEffect } from "react";
import { Layout as L } from "../layout/Layout";
import CartAdd from "./CartAdd";
import Table from "./Table";
import axios from "axios";

function ProductViewer({ pdata, children = "" }) {
  const [data, setdata] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/product?id=1`).then((e) => {
      setdata(e.data);
    });
  }, []);

  if (data) {
    const { src, name, brand, category, desc, price, table } = data;

    if (name && brand && category && desc && price && table) {
      return (
        <div className="bg-alice-blue pt-8">
          <L.Fluid>
            <L.Container className="bg-white rounded-xl">
              <L.Row>
                <Card>
                  <Image src={data.src} />
                  <Info>
                    <Name>{name}</Name>
                    <Brand>{brand}</Brand>
                    <Type>{category}</Type>
                    <Desc>{desc}</Desc>
                    <Price>{price}</Price>
                    <CartAdd></CartAdd>
                  </Info>
                </Card>
                <Table tableData={data.table}></Table>
              </L.Row>
            </L.Container>
          </L.Fluid>
        </div>
      );
    }
  }
}
export function Card({ children = "" }) {
  return (
    <div className="flex flex-col lg:flex-row items-start w-full overflow-hidden hover:shadow-none transition-all ease-in duration-200 p-4">
      {children}
    </div>
  );
}
export function Image({ src = "blank" }) {
  return (
    <img
      className="flex items-center w-full max-w-[400px] aspect-square bg-alice-blue rounded-xl"
      src={src}
      alt={"product:" + src}
    />
  );
}
export function Info({ children = "" }) {
  return <div className="flex flex-col lg:px-12 py-5">{children}</div>;
}

export function Name({ children = "" }) {
  return (
    <div className="lg:text-2xl uppercase font-medium text-navy mb-2">
      {children}
    </div>
  );
}
export function Brand({ children = "" }) {
  return <div className="lg:text-xl text-navy mb-3">Brand: {children}</div>;
}
export function Type({ children = "" }) {
  return <div className="lg:text-xl text-navy mb-3">Type: {children}</div>;
}
export function Desc({ children = "" }) {
  return <div className="text-navy mb-3 whitespace-pre-wrap">{children}</div>;
}
export function Price({ children = "" }) {
  return (
    <div className="text-xl lg:text-3xl font-medium text-red-700 py-1 lg:py-3 mb-2">
      ${children}
    </div>
  );
}

export default ProductViewer;

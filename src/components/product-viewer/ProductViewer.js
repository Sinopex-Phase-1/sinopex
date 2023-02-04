/* eslint-disable array-callback-return */
import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router";
//
import { Layout as L } from "../layout/Layout";
import CartAdd from "./CartAdd";
import Table from "./Table";
//
import { ProductContext } from "../../context/Product";

function ProductViewer({ data, children = "" }) {
  // const allData = useContext(ProductContext);
  // const url = useLocation();
  // const id = new URLSearchParams(url.search).get("id");

  // let data = allData.filter((e) => e.model === id);
  // data = data[0];
  // // console.log(data);

  // if (!data) return;

  return (
    <div className="bg-alice-blue pt-8">
      <L.Fluid>
        <L.Container className="bg-white rounded-xl">
          <L.Row>
            <Card>
              <Image src={"https://henxing.up.railway.app" + data?.file} />
              <Info>
                <Name>{data?.name}</Name>
                <Type>{data?.category}</Type>
                <Origin>{data?.origin}</Origin>
                <Model>{data?.model}</Model>
                <Price>{parseFloat(data?.price).toFixed(2)}</Price>
                <SupplyAbility>{data?.supply_ability}</SupplyAbility>
                <CartAdd></CartAdd>
              </Info>
            </Card>
          </L.Row>
          <div className="px-4 pb-4">
            <Desc>{data?.details}</Desc>
            <Table tableData={data?.tables}></Table>
          </div>
        </L.Container>
      </L.Fluid>
    </div>
  );
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
export function SupplyAbility({ children = "" }) {
  return (
    <div className="lg:text-xl text-navy mb-3">Supply ability: {children}</div>
  );
}

export function Model({ children = "" }) {
  return <div className="lg:text-xl text-navy mb-3">Model: {children}</div>;
}
export function Type({ children = "" }) {
  return <div className="lg:text-xl text-navy mb-3">Category: {children}</div>;
}
export function Origin({ children = "" }) {
  return <div className="lg:text-xl text-navy mb-3">Origin: {children}</div>;
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

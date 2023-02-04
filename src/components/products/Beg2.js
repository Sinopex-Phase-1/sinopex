/* eslint-disable array-callback-return */
import { useContext } from "react";
import { ProductContext } from "../../context/Product";
import { Banner, Layout as L } from "../layout/Layout";
import { Product as P } from "../layout/ProductCard";
//
import banner from "../../assets/images/banner/banner2.png";

export function ProductData(params) {
  return [
    { name: "product name", price: "399.00" },
    { name: "product name", price: "399.00" },
    { name: "product name", price: "399.00" },
    { name: "product name", price: "399.00" },
    { name: "product name", price: "399.00" },
    { name: "product name", price: "399.00" },
    { name: "product name", price: "399.00" },
    { name: "product name", price: "399.00" },
  ];
}

export default function Beg({ children }) {
  const data = useContext(ProductContext);
  // console.log(data);

  return (
    <div className="bg-alice-blue">
      <L.Fluid>
        <L.Container>
          <Banner src={banner}></Banner>
          {/* <L.Title>Beg</L.Title> */}
          <L.Row>
            {data.map((e, i) => {
              if (14 < i && i < 23) {
                return (
                  <P.Card key={i} href={"/product?id=" + e?.model}>
                    <P.Image
                      src={"https://henxing.up.railway.app" + e.file}
                    ></P.Image>
                    <P.Info>
                      <P.Name>{e.name}</P.Name>
                      <P.Price>{parseFloat(e?.price).toFixed(2)}</P.Price>
                    </P.Info>
                  </P.Card>
                );
              }
            })}
          </L.Row>
        </L.Container>
      </L.Fluid>
    </div>
  );
}

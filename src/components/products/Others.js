import { Banner, Layout as L } from "../layout/Layout";
import { Product as P } from "../layout/ProductCard";

export function ProductData(params) {
  let data = [
    { name: "product name", price: "399.00" },
    { name: "product name", price: "399.00" },
    { name: "product name", price: "399.00" },
    { name: "product name", price: "399.00" },
    { name: "product name", price: "399.00" },
    { name: "product name", price: "399.00" },
    { name: "product name", price: "399.00" },
    { name: "product name", price: "399.00" },
  ];
  return data;
}

export default function Others({ children }) {
  let data = ProductData();

  return (
    <div className="bg-alice-blue">
      <L.Fluid>
        <L.Container>
          <Banner src="/assets/images/banners/beg.png"></Banner>
          <L.Title>Beg</L.Title>
          <L.Row>
            {data.map((e, i) => {
              if (i < 8) {
                return (
                  <P.Card key={i} href={"/product?id="}>
                    <P.Image></P.Image>
                    <P.Info>
                      <P.Name>{e.name}</P.Name>
                      <P.Price>{e.price}</P.Price>
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

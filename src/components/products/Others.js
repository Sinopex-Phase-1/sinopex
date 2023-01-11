import Fluid, { Banner, Container, ProductTitle, Row } from "../layout/Layout";
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
      <Fluid>
        <Container>
          <ProductTitle>Produtct by category</ProductTitle>
          <Row>
            {data.map((e, i) => (
              <P.Card key={e + i}>
                <P.Image></P.Image>
                <P.Info>
                  <P.Name>{e.name}</P.Name>
                  <P.Price>${e.price}</P.Price>
                </P.Info>
              </P.Card>
            ))}
          </Row>
        </Container>
      </Fluid>
    </div>
  );
}

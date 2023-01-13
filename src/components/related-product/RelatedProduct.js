import axios from "axios";
import { useEffect, useState } from "react";
import { Layout as L } from "../layout/Layout";
import { Product as P } from "../layout/ProductCard";

function RelatedProduct() {
  const [data, setdata] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/related-product?id=1`).then((e) => {
      setdata(e.data);
    });
  }, []);

  if (data) {
    return (
      <div className="bg-alice-blue">
        <L.Fluid>
          <L.Container>
            <L.Title>Related Product</L.Title>
            <L.Row>
              {data.map((e, i) => {
                if (i < 8) {
                  return (
                    <P.Card key={i} href={"/product?id="}>
                      <P.Image></P.Image>
                      <P.Info>
                        <P.Name>{e.name}</P.Name>
                        <P.Price>${e.price}</P.Price>
                      </P.Info>
                    </P.Card>
                  );
                } else {
                  return "";
                }
              })}
            </L.Row>
          </L.Container>
        </L.Fluid>
      </div>
    );
  }
}

export default RelatedProduct;

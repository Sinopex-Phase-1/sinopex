/* eslint-disable array-callback-return */
import { useContext } from "react";
import { ProductContext } from "../../context/Product";
import { Banner, Layout as L } from "../layout/Layout";
import { Product as P } from "../layout/ProductCard";
//
import banner from "../../assets/images/banner/banner3.png";

export default function Others({ children }) {
  const data = useContext(ProductContext);

  return (
    <div className="bg-alice-blue">
      <L.Fluid>
        <L.Container>
          <Banner src={banner}></Banner>
          {/* <L.Title>Beg</L.Title> */}
          <L.Row>
            {data.map((e, i) => {
              if (8 < i && i < 17) {
                return (
                  <P.Card key={i} href={"/product?id=" + e?.model}>
                    <P.Image
                      src={"https://henxing.up.railway.app" + e?.file}
                    ></P.Image>
                    <P.Info>
                      <P.Name>{e?.name}</P.Name>
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

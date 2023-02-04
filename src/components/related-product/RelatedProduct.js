import { Layout as L } from "../layout/Layout";
import { Product as P } from "../layout/ProductCard";

function RelatedProduct({ singleData, allData }) {
  // console.log(singleData, allData);
  const data = allData.filter((e) => e.category === singleData.category);

  // console.log({ data });

  return (
    <div className="bg-alice-blue">
      <L.Fluid>
        <L.Container>
          <L.Title>Related Product</L.Title>
          <L.Row>
            {data.map((e, i) => {
              console.log(e);
              if (i < 4) {
                return (
                  <P.Card key={i} href={"/product?id=" + e.model}>
                    <P.Image
                      src={"https://henxing.up.railway.app/" + e.file}
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

export default RelatedProduct;

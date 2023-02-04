import { useContext } from "react";
import { useLocation } from "react-router";
//
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ProductViewer from "../components/product-viewer/ProductViewer";
import RelatedProduct from "../components/related-product/RelatedProduct";
//
import { ProductContext } from "../context/Product";

function Product() {
  const allData = useContext(ProductContext);
  const url = useLocation();
  const id = new URLSearchParams(url.search).get("id");
  let data = allData.filter((e) => e.model === id);
  data = data[0];
  // console.log(data);

  if (!data) return;

  return (
    <div>
      <Header></Header>
      <ProductViewer data={data}></ProductViewer>
      <RelatedProduct singleData={data} allData={allData}></RelatedProduct>
      <Footer></Footer>
    </div>
  );
}

export default Product;

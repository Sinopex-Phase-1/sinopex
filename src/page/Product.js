import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ProductViewer from "../components/product-viewer/ProductViewer";
import RelatedProduct from "../components/related-product/RelatedProduct";

function Product({ data }) {
  return (
    <div>
      <Header></Header>
      <ProductViewer></ProductViewer>
      <RelatedProduct></RelatedProduct>
      <Footer></Footer>
    </div>
  );
}

export default Product;

import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { Layout as L } from "../components/layout/Layout";

export default function FactoryView() {
  return (
    <div className="bg-alice-blue">
      <Header></Header>
      <L.Fluid>
        <L.Container></L.Container>
      </L.Fluid>
      <Footer></Footer>
    </div>
  );
}

import { Container } from "../../layout/Layout";
import Category from "./category/Category";
import Navs from "./navs/Navs";

export function NavBar() {
  return (
    <div className="bg-navy text-gray-300 z-[100] h-12">
      <Container className="h-full">
        <div className="flex justify-between items-center h-full">
          <Category></Category>
          <Navs></Navs>
        </div>
      </Container>
    </div>
  );
}

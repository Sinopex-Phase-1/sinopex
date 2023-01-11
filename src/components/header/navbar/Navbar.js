import { Container } from "../../layout/Layout";
import Category from "./category/Category";

const navbar = [
  "Home",
  [
    "Products",
    [
      "Barricade Lights",
      "Road Safety Signs",
      "Bollard Post",
      "Cones Road Safety",
      "Rubber Safety Traffic Product",
      "Caution Billboards",
      "Safety Delineators",
      "Strobe Police Warning Light",
      "Emergency Kit",
      "Barriers",
      "Parking Lot",
      "Construction Road Safety",
      "Floating Pot",
      "Baby Playpen Fence",
      "Led Bulb",
      "Lint Remover",
    ],
  ],
  "Video",
  "Factory View",
  "Send Inquiry",
  "News",
  "History",
  "Contact US",
  "Download",
  "F&Q",
];

export function NavBar() {
  return (
    <div className="bg-navy text-gray-300 z-[100] h-12">
      <Container>
        <div className="flex justify-between items-center">
          <Category></Category>
          <div className="category flex justify-center">
            {navbar.map((e, i) => {
              if (typeof e === "string") {
                return <Menu key={e + i}>{e}</Menu>;
              } else if (typeof e === "object") {
                return <SubMenu key={e + i} data={e} />;
              } else {
                return "";
              }
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
export function Menu({ data, children }) {
  return (
    <a
      href={MakeURL(children)}
      type="button"
      className="py-3 px-4 hover:underline hover:underline-offset-2 hover:decoration-2 ease-in capitalize text-start whitespace-nowrap"
    >
      {children}
    </a>
  );
}
export function SubMenu({ data }) {
  return (
    <div className="bg-navy relative group">
      <div className="py-3 px-4 ease-in capitalize flex gap-2 items-center">
        {data[0]}
        <i className="fa fa-angle-down mt-1" aria-hidden="true"></i>
      </div>

      <div className="w-[720px] absolute left-0 top-full bg-white text-navy shadow-md hidden group-hover:flex flex-wrap z-40">
        {data[1].map((e, i) => (
          <a
            key={e + i}
            href={MakeURL(e)}
            type="button"
            className="block w-60 py-3 px-4 hover:underline hover:underline-offset-2 hover:decoration-2 capitalize text-start whitespace-nowrap"
          >
            {e}
          </a>
        ))}
      </div>
    </div>
  );
}
export const MakeURL = (text) => text.split(" ").join("-").toLowerCase();

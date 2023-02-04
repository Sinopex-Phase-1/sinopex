import { Layout as L } from "../layout/Layout";

export default function Video() {
  return (
    <L.Fluid>
      <L.Container>
        <div className="block lg:flex justify-center gap-4 py-8">
          <div className="w-full lg:w-1/2 lg:p-3">
            <iframe
              className="w-full h-[200px] lg:h-[334px] rounded-2xl shadow-xl"
              src="https://www.youtube.com/embed/RB4P1HTmwLc"
              title="Create an Online Store That Stands Out | Wix eCommerce"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-full lg:w-1/2 py-3 lg:px-3">
            <L.Title className="text-start">BOOK YOUR PRODUCT NOW</L.Title>
            <L.Desc className="text-start py-0">
              Exporter all Kinds of New and Recondition Construction Equipment
              Vehicle
            </L.Desc>
            <br />
            <L.Desc className="text-start py-0">
              We are specialized in supply of New, Used and Re-usable all kinds
              of ship spare and equipment, Provide Manufacturing, Rebuilding,
              Erection Services for Generators, Boiler, Industrial Machinery,
              Plants.
            </L.Desc>
          </div>
        </div>
      </L.Container>
    </L.Fluid>
  );
}

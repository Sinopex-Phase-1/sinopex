import { Layout as L } from "../layout/Layout";

export default function Video() {
  return (
    <L.Fluid>
      <L.Container>
        <div className="block lg:flex justify-center gap-4 py-8">
          <div className="w-full lg:w-1/2 lg:p-3">
            <video className="w-full rounded-2xl shadow-xl" controls>
              <source src="your_video's_name.mp4" type="video/mp4" />
              Error Message
            </video>
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

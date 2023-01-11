import { Layout as L } from "../layout/Layout";

export default function CompanyProfile({ children }) {
  return (
    <div className="bg-alice-blue">
      <L.Fluid>
        <L.Container>
          <L.Title>Company Profile</L.Title>
          <L.Desc>
            Exporter all Kinds of New and Recondition Construction Equipment
            Vehicle. We are specialized in supply of New, Used and Re-usable all
            kinds of ship spare and equipment, Provide Manufacturing,
            Rebuilding, Erection Services for Generators, Boiler, Industrial
            Machinery, Plants.
          </L.Desc>
          <div className="block lg:flex justify-center gap-4 py-8">
            <div className="w-full lg:w-1/2 ">
              <img
                src={""}
                alt="company"
                className="w-full aspect-square bg-white rounded-xl shadow-md"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              <div className="flex justify-center gap-4">
                <div className="w-full lg:w-1/2">
                  <img
                    src={""}
                    alt="company"
                    className="w-full aspect-square bg-white rounded-xl shadow-md"
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <img
                    src={""}
                    alt="company"
                    className="w-full aspect-square bg-white rounded-xl shadow-md"
                  />
                </div>
              </div>
              <div className="flex justify-center gap-4">
                <div className="w-full lg:w-1/2">
                  <img
                    src={""}
                    alt="company"
                    className="w-full aspect-square bg-white rounded-xl shadow-md"
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <img
                    src={""}
                    alt="company"
                    className="w-full aspect-square bg-white rounded-xl shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </L.Container>
      </L.Fluid>
    </div>
  );
}

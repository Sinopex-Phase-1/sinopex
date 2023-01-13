import React from "react";
import ContactForm from "../components/contact-form/ContactForm";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { Layout as L } from "../components/layout/Layout";
import Map from "../components/map/Map";

export default function Contact({ children }) {
  return (
    <div className="bg-alice-blue">
      <Header></Header>{" "}
      <L.Fluid>
        <L.Container>
          <div className="bg-white px-4 lg:px-8 py-3 lg:py-4 rounded-xl shadow-md">
            <L.Title className="text-start">CONTACT INFORMATION</L.Title>
            <div className="py-4 flex gap-5 items-center">
              <div className="">
                <img
                  src=""
                  alt="profile"
                  className="w-52 h-52 object-cover rounded-full bg-alice-blue"
                />
              </div>
              <table className="bg-white w-full">
                <tr className="border rounded-t-xl">
                  <td className="px-3 py-3 text-navy" width="30%">
                    E-Mail
                  </td>
                  <td className="px-3 py-3 text-navy" width="70%">
                    info@hengxing.biz
                  </td>
                </tr>
                <tr className="border">
                  <td className="px-3 py-3 text-navy">Mobile phone</td>
                  <td className="px-3 py-3 text-navy">+86 15869518698</td>
                </tr>
                <tr className="border rounded-b-xl">
                  <td className="px-3 py-3 text-navy">TEL</td>
                  <td className="px-3 py-3 text-navy">+86 574 89219689</td>
                </tr>
                <tr className="border rounded-b-xl">
                  <td className="px-3 py-3 text-navy">Country</td>
                  <td className="px-3 py-3 text-navy">China</td>
                </tr>
              </table>
            </div>
          </div>
        </L.Container>
      </L.Fluid>
      <L.Fluid>
        <L.Container>
          <div className="bg-white px-4 lg:px-8 py-3 lg:py-4 rounded-xl shadow-md">
            <L.Title className="text-start">
              COMPANY CONTACT INFORMATION
            </L.Title>
            <div className="py-4">
              <table className="bg-white">
                <tr className="border rounded-t-xl">
                  <td className="px-3 py-3 text-navy" width="30%">
                    Company Name
                  </td>
                  <td className="px-3 py-3 text-navy" width="70%">
                    Hengxing Traffic Safety Manufacturer Co.,Ltd
                  </td>
                </tr>
                <tr className="border">
                  <td className="px-3 py-3 text-navy">Address</td>
                  <td className="px-3 py-3 text-navy">
                    Factory Address: Chenhenglou Industrial Zone, Gulin Town,
                    Yinzhou District, Ningbo City, Zhejiang Province, China, 2.
                    AUX Building, Yizhou District, Ningbo City
                  </td>
                </tr>
                <tr className="border rounded-b-xl">
                  <td className="px-3 py-3 text-navy">Company zip</td>
                  <td className="px-3 py-3 text-navy">315000</td>
                </tr>
              </table>
              <L.Desc className="text-start my-4">
                As the top leading manufacturer on road safety and traffic sign
                as well as road signal professional factory in china. Hengxing
                located in the city of Ningbo. open-minded city. it is only
                150km from the main city of Shanghai China. so people can choose
                airlines for the main area of the world flying to Shanghai and
                transfer from Shanghai to Ningbo , it is only less than 2 hours
                , if by air from PGV airport Shanghai, only 30 minutes to Ningbo
                Airport. the good news is HENGXING factory just located near
                Ningbo airport, about 9 minutes from Ningbo airport to our
                factory . you are warmly welcome to visit us at any time. do not
                hesitate to contacing us directly by mobile or whatsapp even
                email . we are here waiting for you. For choosing the high
                stable quality traffic cones, road side bollards and delineators
                as well as caution wet floor signs from our factory.
              </L.Desc>
            </div>
          </div>
        </L.Container>
      </L.Fluid>
      <ContactForm></ContactForm>
      <Map></Map>
      <Footer></Footer>
    </div>
  );
}

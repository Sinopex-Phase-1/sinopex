import React from "react";
import ContactForm from "../components/contact-form/ContactForm";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { Layout as L } from "../components/layout/Layout";

export default function SendInquiry({ children }) {
  return (
    <div className="bg-alice-blue">
      <Header></Header>
      <L.Fluid>
        <L.Container>
          <L.Title>Send inquiry</L.Title>
          <ContactForm></ContactForm>
        </L.Container>
      </L.Fluid>
      <Footer></Footer>
    </div>
  );
}

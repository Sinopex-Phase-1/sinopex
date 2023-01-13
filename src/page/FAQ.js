import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { Layout as L } from "../components/layout/Layout";

export default function FAQ() {
  return (
    <div className="bg-alice-blue">
      <Header></Header>
      <L.Fluid>
        <L.Container>
          <L.Title>FAQ</L.Title>
          <Box>
            <Heading>Payment</Heading>
            <List>
              <Item>Small/sample orders: 100% in advance</Item>
              <Item>
                Large orders: 30% in advance and 70% against the copy of BL
              </Item>
              <Item>To be negotiated.</Item>
            </List>
          </Box>
          <Box>
            <Heading>Sample</Heading>
            <List>
              <Item>
                Sample fee: Twice of unit price of Free of charge or to be
                negotiated;
              </Item>
              <Item>
                Sample time: We will send it out within one day if we have
                stock; we will send it out in about 10 to 20days for customized
                items.
              </Item>
            </List>
          </Box>
          <Box>
            <Heading>Working procedure</Heading>
            <List>
              <Item>
                Confirm all detail information: Sample, price, production time,
                etc.;
              </Item>
              <Item>Arrange deposit/full payment;</Item>
              <Item>Start mass production;</Item>
              <Item>Arrange inspection;</Item>
              <Item>Arrange shipping and offer BL copy;</Item>
              <Item>Balance payment;</Item>
              <Item>We will try to finish products within one month. </Item>
            </List>
          </Box>
          <Box>
            <Heading>Contact information</Heading>
            <List>
              <Item>
                Instant messages tools: skype, wechat, whatsapp, trade manager,
                facebook, twitter, etc.
              </Item>
              <Item>
                Other tools: Email, telephone, fax, etc. 3. We will try to reply
                you within 12hours on workdays.
              </Item>
            </List>
          </Box>
        </L.Container>
      </L.Fluid>
      <Footer></Footer>
    </div>
  );
}
const Box = ({ children }) => (
  <div className="bg-white px-4 lg:px-8 py-2 lg:py-4 rounded-xl my-4">
    {children}
  </div>
);
const Heading = ({ children }) => (
  <div className="text-navy text-xl font-medium underline underline-offset-4 decoration-2">
    {children}
  </div>
);
const List = ({ children }) => (
  <ol className="list-disc my-2 text-navy  rounded-xl py-1">{children}</ol>
);
const Item = ({ children }) => <li className="mx-4">{children}</li>;

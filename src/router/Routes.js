import { createBrowserRouter } from "react-router-dom";
import Contact from "../page/Contact";
import FAQ from "../page/FAQ";
import Index from "../page/Index";
import Product from "../page/Product";
import SendInquiry from "../page/SendInquiry";
import History from "../page/History";
import Video from "../page/Video";
import Download from "../page/Download";
import News from "../page/Download";
import FactoryView from "../page/FactoryView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index></Index>,
  },
  {
    path: "/home",
    element: <Index></Index>,
  },
  {
    path: "/contact",
    element: <Contact></Contact>,
  },
  {
    path: "/product",
    element: <Product></Product>,
  },
  {
    path: "/video",
    element: <Video></Video>,
  },
  {
    path: "/factory-view",
    element: <FactoryView></FactoryView>,
  },
  {
    path: "/news",
    element: <News></News>,
  },
  {
    path: "/send-inquiry",
    element: <SendInquiry></SendInquiry>,
  },
  {
    path: "/history",
    element: <History></History>,
  },
  {
    path: "/download",
    element: <Download></Download>,
  },
  {
    path: "/faq",
    element: <FAQ></FAQ>,
  },
]);

import Index from "./page/Index";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Routes";

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

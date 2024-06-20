import { createBrowserRouter } from "react-router-dom";
import { Banner } from "../Components/Home/Banner";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Banner/>,
    },
    
  ]);

  export default router;
import { createBrowserRouter } from "react-router-dom";
import Header from "../common/Header";

export const mainRouter = createBrowserRouter([{
    path:"/",
    element:<Header/>
}])
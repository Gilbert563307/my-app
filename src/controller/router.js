import { createBrowserRouter } from "react-router-dom";
import Maincontroller from "./Maincontroller";
import ErrorPage from "../view/errorPage";
import CollectListBooks from "../view/CollectListBooks";
import { BooksLogic } from "../model/BooksLogic";
import BooksController from "./BooksController";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Maincontroller />,
        children: [
            {
                path: "/books",
                element: <BooksController/>,
                children: [
                    {
                        path: "/books/show",
                        element: <CollectListBooks></CollectListBooks>
                    }
                   
                ]
            }
        ],
        
    },
    {
        path: "*",
        element: <ErrorPage />
    }
]);
export default router;
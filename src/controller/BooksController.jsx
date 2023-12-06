import React, { createContext, useContext, useEffect, useReducer} from 'react'
import { Outlet} from "react-router-dom";
import { BooksLogic } from '../model/BooksLogic';

const initialState = {
    book: null,
    books: [],
};

const BooksControllerState = createContext(initialState);
export default function BooksController() {
    //const navigate = useNavigate();
    const BooksLogicInstance = BooksLogic();

    const collectListBooks = ()  => {
        const books = BooksLogicInstance.getAllBooks();
        console.log(`collectListBooks`, books)
        return books;
    }

    const handleRequest = (state, action) => {
        switch (action.type) {
            case "LISTBOOKS":
                const list = collectListBooks();
                return { ...state, books: list }

            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(handleRequest, initialState);

    return (
        <BooksControllerState.Provider value={{ state, dispatch }}>
            <Outlet></Outlet>
        </BooksControllerState.Provider>
    )
}
export const useBookControllerContext = () => {
    return useContext(BooksControllerState);
}

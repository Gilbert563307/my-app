import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { Outlet, useNavigate } from "react-router-dom";
import { BooksLogic } from '../model/BooksLogic';

const initialState = {
    book: null,
    books: [],
};

const BooksControllerState = createContext(initialState);
export default function BooksController() {
    const navigate = useNavigate();
    const BooksLogicInstance = BooksLogic();

    const collectListBooks = async () => {
        const books = await BooksLogicInstance.getAllBooks();
        return books;
    }

    const handleRequest = async (state, action) => {

        switch (action.type) {
            case "list":
                const list = await collectListBooks();
                console.log('>>',list.data);
                return { ...state, books: list.data }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(handleRequest, initialState);

    useEffect(() => {
        if (!state.action) {
            navigate("/books/show");
        }
    }, [])

    return (
        <BooksControllerState.Provider value={{ state, dispatch }}>
            <Outlet></Outlet>
        </BooksControllerState.Provider>
    )
}
export const useBookControllerContext = () => {
    return useContext(BooksControllerState);
}

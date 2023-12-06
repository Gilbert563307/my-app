import { useEffect, useState } from "react";

const API = "http://localhost:8000/api/";

export function BooksLogic() {
    const [books, setBooks] = useState([]);
    const [dataFetched, setDataFetched] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const url = API + "books";
            try {
                const response = await fetch(url);

                if (response.ok) {
                    const data = await response.json();
                    setBooks(data);
                    setDataFetched(true); // Set dataFetched to true after fetching data
                } else {
                    throw new Error(response.status.toString());
                }

            } catch (error) {
                console.log(`Failed fetching books ${error}`);
            }
        };

        fetchData();
    }, []);

    const getAllBooks = () => {
        return books;
    };

    return {
        getAllBooks,
    };
}

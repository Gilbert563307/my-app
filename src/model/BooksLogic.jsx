export function BooksLogic() {

    const API = "http://localhost:8000/api/";

    const getAllBooks = async () => {
        try {
            const url = API + "books";
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (error) {
            return [];
        }

    }

    return {
        getAllBooks,
    }
}
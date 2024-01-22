import React, { useState, useContext, useEffect, useCallback, useRef } from "react";
const URL = "https://openlibrary.org/search.json?q=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [searchItem, setSearchItem] = useState("Van Helsing");
    const [books, setBooks] = useState([]);
    const [result, setResult] = useState("");
    const [page, setPage] = useState(1);
    const totalPage = useRef();

    const fetchBooks = useCallback(async () => {
        try {
            const res = await fetch(`${URL}${searchItem}&page=${page}`);
            const data = await res.json();
            console.log(data);
            const { docs, numFound } = data;

            if (docs) {
                const newBooks = docs.slice(0, 20).map((book) => {
                    const { key, author_name, cover_i, edition_count, first_publish_year, title } = book;

                    return {
                        id: key,
                        author: author_name,
                        cover_id: cover_i,
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        title: title,
                    }
                });

                setBooks(newBooks);

            } else {
                setBooks([]);
                setResult("Result Not Found");
            }

            

            if(numFound) {
                if (numFound % 20 === 0) {
                    totalPage.current = Math.floor(numFound / 20);
                } else {
                    totalPage.current =  Math.floor((numFound / 20) + 1);
                }
            }

        } catch (err) {
            console.log(err);
        }
    }, [searchItem, page])

    useEffect(() => {
        fetchBooks();
    }, [searchItem, fetchBooks, page])

    return (
        <AppContext.Provider value={{
            books, setSearchItem, result, setResult, setPage, page, totalPage
        }}>
            {children}
        </AppContext.Provider>
    )

}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider }

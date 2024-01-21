import React, { useState, useContext, useEffect, useCallback } from "react";
const URL = "https://openlibrary.org/search.json?title=";
const AppContent = React.createContext();

const AppProvider = ({children}) => {
    const [searchItem, setSearchItem] = useState("2023");
    const [books, setBooks] = useState([]);
    // const [loading, setLoading] = useState(true);
    const [result, setResult] = useState("");

    const fetchBooks = useCallback(async() => {
        try {
            const res = await fetch(`${URL}${searchItem}`);
            const data = await res.json();
            console.log(data);
            const {docs} = data;

            if(docs){
                const newBooks = docs.slice(0, 20).map((book) => {
                    const {key, author_name, cover_i, edition_count, first_publish_year, title} = book;

                    return {
                        id: key,
                        author: author_name,
                        cover_id: cover_i,
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        title: title
                    }
                });

                setBooks(newBooks);

                if(newBooks.length > 1){
                    setResult("Results:");
                } else {
                    setResult("Result Not Found")
                }
            } else {
                setBooks([]);
                setResult("Result Not Found");
            }

        } catch (err) {
            console.log(err);
        }
    }, [searchItem])

    useEffect(() => {
        fetchBooks();
    }, [searchItem, fetchBooks])

    return (
        <AppContent.Provider value = {{
             books, setSearchItem, result, setResult,
        }}>
            {children}
        </AppContent.Provider>
    )
    
}

export const useGlobalContent = () => {
    return useContext(AppContent);
}

export {AppContent, AppProvider}

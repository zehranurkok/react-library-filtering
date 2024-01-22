import React from 'react'
import { useGlobalContext } from '../../../src/context';
import Book from "../BookList/Book";
import "./BookList.css";
import cover from "../../images/cover.jpg";
import Page from './Page';

const BookList = () => {
  const { books, result } = useGlobalContext();

  const bookCovers = books.map((book) => {
    return {
      ...book,
      id: (book.id).replace("/works/", ""),
      cover_img: book.cover_id ? `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg` : cover
    }
  });

  return (
    <section className="booklist">

      <div className="container">

        <div className="text-darker-green">
          <h2>Books</h2>
        </div>

        <div className="section-title">
          <h2>{result}</h2>
        </div>

        <div className="booklist-content grid">
          {
            bookCovers.slice(0, 20).map((item, index) => {
              return (
                <Book key={index} {...item} />
              )
            })
          }
        </div>

        <Page />

      </div>
    </section>
  )
}

export default BookList
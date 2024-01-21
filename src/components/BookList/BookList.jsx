import React from 'react'
import { useGlobalContext } from '../../../src/context';
import Book from "../BookList/Book";
import "./BookList.css";
import cover from "../../images/cover.jpg";

const BookList = () => {
  const { books, result } = useGlobalContext();
  const bookCovers = books.map((book) => {
    return {
      ...book,
      id: (book.id).replace("/works/", ""),
      cover_img: book.cover_id ? `https://covers.openlibrary.org/b/id/${ book.cover_id }-L.jpg` : cover
  }
  });

  console.log(bookCovers);

return (
  <section className="booklist">
    <div className="container">
      <div className="section-title">
        <h2>{result}</h2>
      </div>
      <div className="booklist-content grid">
        {
          bookCovers.slice(0, 30).map((item, index) => {
            return (
              <Book key = { index } {...item} />
            )
          })
        }
      </div>
    </div>
  </section>
)
}

export default BookList
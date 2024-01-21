import React from 'react'
import { Link } from 'react-router-dom';
import "./BookList.css";

const Book = (book) => {
  return (
    <div className="book-item flex flexdirection-col flex-jc-sb">
      <div className="book-item-img">
        <img src= { book.cover_img } alt="cover" />
      </div>
      <div className="book-item-info text-center">

        <Link to = { `/book/${book.id }`} { ...book }>
          <div className="book-item-info-item title fontweight-7 fontsize-18">
            <span>{ book.title }</span>
          </div>
        </Link>

        <div className="book-item-info-item author fontsize-15">
          <span className="text-capitalize fontweight-7">Author: </span>
          <span>{ book.author.join(", ") }</span>
        </div>

        <div className="book-item-info-item edition-count fontsize-15">
          <span className="text-capitalize fontweight-7">Total Editions: </span>
          <span>{ book.edition_count }</span>
        </div>

        <div className="book-item-info-item publish-year fontsize-15">
          <span className="text-capitalize fontweight-7">First Publish Year: </span>
          <span>{ book.first_publish_year }</span>
        </div>

      </div>
    </div>
  )
}

export default Book
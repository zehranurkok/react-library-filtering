import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import cover from "../../images/cover.jpg";
import "./BookDetails.css";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const URL = "https://openlibrary.org/works/";

const BookDetails = () => {

  const { id } = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getBookDetails() {
      try {
        const res = await fetch(`${URL}${id}.json`);
        const data = await res.json();

        if (data) {
          const { description, title, covers, subject_places, subject_times, subjects } = data;
          const newBook = {
            description: description ? description.value : "Description details not found.",
            title: title,
            cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : cover,
            subject_places: subject_places ? subject_places.join(", ") : "Subject places not found.",
            subject_times: subject_times ? subject_times.join(", ") : "Subject times not found.",
            subjects: subjects ? subjects.join(", ") : "Subjects not found."
          }
          setBook(newBook);
        } else {
          setBook(null);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getBookDetails();
  }, [id])


  return (
    <section className="book-details">
      <div className="container">

        <button className="back-btn flex flex-jc-c" onClick={() => navigate("/book")}>
          <FaArrowAltCircleLeft size= { 35 }/>
          <span className="fontweight-6 fontsize-18">Go Back</span>
        </button>

        <div className="book-details-content grid">
          <div className="book-details-img">
            <img src= { book?.cover_img }  alt="cover" />
          </div>
          <div className="book-details-info">
            <div className="book-details-item title">
              <span className="fontweight-6 fontsize-24">{ book?.title }</span>
            </div>
            <div className="book-details-item description">
              <span>{ book?.description }</span>
            </div>
            <div className="book-details-item">
            <span className="fontweight-6">Subject Places: </span>
              <span className="text-italic">{ book?.subject_places }</span>
            </div>
            <div className="book-details-item">
            <span className="fontweight-6">Subject Times: </span>
              <span className="text-italic">{ book?.subject_times }</span>
            </div>
            <div className="book-details-item">
            <span className="fontweight-6">Subjects: </span>
              <span>{ book?.subjects }</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookDetails
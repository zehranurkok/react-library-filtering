import React, { useEffect, useRef } from 'react'
import { TbListSearch } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import { useGlobalContent } from '../../../content';
import "./Search.css";

const Search = () => {
  const { setSearchItem, setResult } = useGlobalContent();
  const search = useRef('');
  const navigate = useNavigate();

  useEffect(() => {search.current.focus()}, [])

  function handleSubmit(text) {

    text.preventDefault();
    let tempSearchItem = search.current.value.trim();

    if ((tempSearchItem.replace(/[^\w\s]/gi,"")).length === 0) {
      setSearchItem("Search For Your Escape");
      setResult("...");
    } else {
      setSearchItem(search.current.value);
    }

    navigate("/book");
  }

  return (
    <div className="search-form">
      <div className="container">
        <div className="search-form-content">
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-form-elem flex flex-jc-sb bg-white">
              <input
                type="text"
                className="form-control"
                placeholder='Search For Your Escape'
                ref={search}
              />
              <button type="submit" className="flex flex-jc-c" onClick={handleSubmit}>
                <TbListSearch className='text-logo-color' size={30} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Search
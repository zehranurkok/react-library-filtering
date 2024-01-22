import React from 'react'
import Navbar from '../Navbar/Navbar';
import Search from '../Search/Search';
import './Header.css';

const Header = () => {
  return (
    <div className='holder'>
      <header className='header'>
        <Navbar />
        <div className="header-content flex flex-jc-c text-center text-white">
          <h1 className='header-title text-capitalize fontsize-18 fontweight-4'>Welcome to your Literary Escape</h1>
          <p className="header-text">
            Escape reality through the pages of a book. At Literary Escape,
            we celebrate the written word—where each story is a portal to new perspectives, emotions,
            and worlds. Discover a curated collection of literary gems at Your Literary Escape, carefully
            chosen to transport you to different eras, cultures, and perspectives, ensuring a rich and
            fulfilling reading experience.Your Literary Escape is designed for readers who crave the
            serenity of a quiet corner with a captivating story in hand—because sometimes, the best escape
            is found within the pages of a book.
          </p>
          <Search />
        </div>
      </header>
    </div>
  )
}

export default Header
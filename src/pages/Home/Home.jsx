import React from 'react'
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default Home

// Photo by Sincerely Media on Unsplash
// Photo by <a href="https://unsplash.com/@sincerelymedia?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Sincerely Media</a> on <a href="https://unsplash.com/photos/book-page-beside-eyeglasses-and-coffee-_-hjiem5TqI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
import React from 'react'
import "./About.css";
import about from "../../images/about.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container">

        <div className="text-darker-green">
          <h2>About</h2>
        </div>

        <div className="about-content flex">
      
          <div className="about-text grid">
          
          <p className="fontsize-17">
          Welcome to Your Literary Escape – a digital sanctuary born out of our profound passion for the written word. 
          Here, we embark on a journey through the vast landscapes of literature, where each page is a gateway to unexplored 
          realms of imagination, emotion, and knowledge.
          </p>

          <h2 className="about-title fontsize-26 letterspace-1 text-logo-color">Who We Are</h2>
          <p className="fontsize-17">
          At Your Literary Escape, we are a community of avid readers, writers, and dreamers united by our love for storytelling. 
          We believe in the transformative power of literature to illuminate minds, broaden perspectives, and ignite the flames of 
          creativity. Our team is diverse, hailing from different corners of the world, 
          each bringing a unique lens through which we view the enchanting world of books.
          </p>

          <div className="about-img">
            {/* Photo by Sincerely Media on Unsplash
             Photo by <a href="https://unsplash.com/@sincerelymedia?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Sincerely Media</a> on <a href="https://unsplash.com/photos/open-books-on-white-surface-DgQf1dUKUTM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> */}
            <img src={about} alt="Lit Verse" />
          </div>

          </div>

          <div className="about-text">

          <h2 className="about-title fontsize-26 letterspace-1 text-logo-color">Our Mission</h2>
          <p className="fontsize-17">
          Our mission is simple yet profound – to create a haven for bibliophiles, a space where literary enthusiasts can come 
          together to celebrate the magic of words. We aim to curate a collection that transcends genres, 
          eras, and cultures, offering a diverse tapestry of stories that resonate with the human experience.
          </p>

          <h2 className="about-title fontsize-26 letterspace-1 text-logo-color">What Defines Us</h2>
          <p className="fontsize-17">
          At the core of Your Literary Escape is a commitment to quality, diversity, and the joy of discovery. We carefully 
          select literary gems that transport our readers to different eras, cultures, and perspectives, ensuring a rich and 
          fulfilling reading experience. Our virtual shelves are not just filled with books; they are portals to new worlds, 
          inviting you to escape reality and explore the boundless landscapes of human imagination.
          </p>

          <h2 className="about-title fontsize-26 letterspace-1 text-logo-color">Beyond Books</h2>
          <p className="fontsize-17">
          Your Literary Escape is more than a collection of pages; it's a community. We invite you to join us not only as readers 
          but as fellow explorers in this literary odyssey. Engage in discussions, share your favorite reads, 
          and connect with like-minded individuals who understand the profound impact of a well-crafted story.
          </p>

          <h2 className="about-title fontsize-26 letterspace-1 text-logo-color">Our Promise</h2>
          <p className="fontsize-17">
          As stewards of this literary haven, we promise to continue curating thought-provoking, inspiring, and captivating content. 
          Whether you seek an escape into fiction, a journey through non-fiction, 
          or a dive into the realms of poetry, Your Literary Escape is here to accompany you on your literary adventure.
          </p>

          <h2 className="about-title fontsize-26 letterspace-1 text-logo-color">Thank You for Being a Part of Our Story</h2>
          <p className="fontsize-17">
          To each member of our growing community, thank you for being a part of our story. 
          Your love for literature fuels our passion, and together, 
          we'll continue to explore the infinite possibilities that unfold within the pages of a book.
          </p>

          <p className="fontsize-20 text-logo-color">Your Literary Escape – Where Stories Come to Life.</p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About


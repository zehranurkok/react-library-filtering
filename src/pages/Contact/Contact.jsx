import React from 'react'
import "./Contact.css";
import { VscSend } from "react-icons/vsc";

const Contact = () => {
    return (
        <section className="container">
            <h1 className='contact section-title text-darker-green'>Contact Us</h1>
            <div className="flex flex-jc-sb">
                <address className="contact-info fontsize-18 fontweight-5">
                    <h2 className='text-logo-color'>Get in touch</h2>
                    <div className="contact-text flex">
                        <span className='text-logo-color letterspace-1'>Mail: </span>
                        <p> zehranurkok@gmail.com</p>
                    </div>
                    <div className="contact-text flex">
                        <span className='text-logo-color letterspace-1'>Phone: </span>
                        <p> +90 XXX XXXX</p>
                    </div>
                    <p className='flexwrap'>Welcome to Your Literary Escape! Whether you have a question, a suggestion, or just want
                        to say hello, I'd love to hear from you. Feel free to reach out using
                        the contact form below, and I'll get back to you as soon as possible.
                    </p>
                </address>
                <form action="/" className="contact-form flex flexdirection-col">
                    <div className="form-control flex">
                        <input type="text" className="contact-input text-white fontsize-18 fontweight-5 letterspace-1" id="name" name="name" placeholder="Your Name" />
                        <input type="email" className="contact-input text-white fontsize-18 fontweight-5 letterspace-1" id="email" name="email" placeholder="Your Mail" />
                    </div>
                    <textarea id="message" name="message"
                        placeholder="Share your thoughts, questions, or just say hello! We'd love to hear from you. Feel free to write your message here...">
                    </textarea>
                    <button className="contact-btn text-logo-color fontsize-18 fontweight-5 letterspace-1" type="submit">
                        <VscSend size={25}/>
                        <span>Send</span>
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact
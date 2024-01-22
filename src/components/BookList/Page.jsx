import React from 'react'
import { useGlobalContext } from '../../context';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import "./BookList.css";

const Page = () => {
    const { setPage, page, totalPage } = useGlobalContext();
    console.log(totalPage);
    console.log(page);

    const handlePrevClick = () => {
        setPage(page - 1);
        console.log(totalPage);
        console.log(page);
    };

    const handleNextClick = () => {
        setPage(page + 1);
        console.log(totalPage);
        console.log(page);
    };

    return (
        <div className="btns flex flex-jc-c">

            <button className="btn flex" onClick={handlePrevClick}>
                <FaArrowAltCircleLeft size={35} style={{ color: "#789461" }} />
                <span className="fontweight-6 fontsize-18">Back</span>
            </button>

            <button className="btn flex" onClick={handleNextClick}>
                <span className="fontweight-6 fontsize-18">Next</span>
                <FaArrowAltCircleRight size={35} style={{ color: "#789461" }} />
            </button>

        </div>
    )
}

export default Page
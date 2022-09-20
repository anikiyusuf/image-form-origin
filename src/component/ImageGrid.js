import React from 'react'
import image2 from "../images/image2.jpg"
import image3 from "../images/image3.jpg"
import image4 from "../images/image4.jpg"
import image5 from "../images/image5.jpg"
import image6 from "../images/image6.jpg"
import image7 from "../images/image7.jpg"
import image8 from "../images/image8.jpg"
import image9 from "../images/image9.jpg"
import image10 from "../images/image10.jpg"
import image11 from "../images/image11.jpg"
import image12 from "../images/image12.jpg"
import image13 from "../images/image13.jpg"
import "./ImageGrid.scss"


export default function ImageGrid(){
    return(
        <div   className="section">
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
            <img src={image5} alt="" />
            <img src={image6} alt="" />
            <img src={image7} alt="" />
            <img src={image8} alt="" />
            <img src={image9} alt="" />
            <img src={image10} alt="" />
            <img src={image11} alt="" />
            <img src={image12} alt="" />
            <img src={image13} alt="" />
        </div>

    )
}
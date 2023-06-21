import React from 'react'
import Img1 from "../../assets/DIY1.jpg"
import Img2 from "../../assets/DIY2.jpg"
import Img3 from "../../assets/DIY3.jpg"
import Img4 from "../../assets/DIY4.jpg"
import Img5 from "../../assets/DIY5.jpg"
import Img6 from "../../assets/DIY6.jpg"
import Img7 from "../../assets/DIY7.jpeg"
import Img8 from "../../assets/DIY8.jpg"
import Img9 from "../../assets/DIY9.jpeg"
import Img10 from "../../assets/DIY10.jpeg"
import Img11 from "../../assets/DIY11.jpeg"
import Img12 from "../../assets/DIY12.jpg"
import "./Gallery.css"


function Gallery() {
    let data=[
        {
            id:1,
            imgSrc:Img1,
        },
        {
            id:2,
            imgSrc:Img2,
        },
        {
            id:3,
            imgSrc:Img3,
        },
        {
            id:4,
            imgSrc:Img4,
        },
        {
            id:5,
            imgSrc:Img5,
        },
        {
            id:6,
            imgSrc:Img6,
        },
        {
            id:7,
            imgSrc:Img7,
        },
        {
            id:8,
            imgSrc:Img8,
        },
        {
            id:9,
            imgSrc:Img9,
        },
        {
            id:10,
            imgSrc:Img10,
        },
        {
            id:11,
            imgSrc:Img11,
        },
        {
            id:12,
            imgSrc:Img12,
        },

    ]
  return (
    <>
<h1 className="text-2xl mb-3 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-blue font-black leading-7 md:leading-10">
More Ideas </h1>

    <div className='gallery'>
        
{
    data.map((item,index)=>{
        return(
            <div className='pics' key={index}>
<img src={item.imgSrc}  alt='DIYGallery' style={{width:'100%'}}/>
            </div>
        )
    })
}
    </div>
    </>
  )
}

export default Gallery
{/*

*/}
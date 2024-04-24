import React, {useEffect} from "react";
import './main.css'
import img1 from '../../Assets/img(02).jpg'
import img2 from '../../Assets/img(01).jpg'
import img3 from '../../Assets/img(03).jpg'
import img4 from '../../Assets/img(04).jpg'
import img5 from '../../Assets/img(05).jpg'
import img6 from '../../Assets/img(06).jpg'
import img7 from '../../Assets/img(07).jpg'
import img8 from '../../Assets/img(08).jpg'
import img9 from '../../Assets/img(09).jpg'
import img10 from '../../Assets/img(10).jpg'
import img11 from '../../Assets/img(11).jpg'
import img12 from '../../Assets/img(12).jpg'
import img13 from '../../Assets/img(13).jpg'
import img14 from '../../Assets/img(14).jpg'

import Aos from "aos"
import 'aos/dist/aos.css'

import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";

const Data = [
    {
        id: 1,
        imgSrc: img1,
        destTitle: 'Bali Island',
        location: 'Sri Lanka',
        grade: 'CULTURE RELAX',
        fees: '$500',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },

    {
        id:2,
        imgSrc: img2,
        destTitle: 'Bali Island',
        location: 'Sri Lanka',
        grade: 'CULTURE RELAX',
        fees: '$500',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },

    {
        id:3,
        imgSrc: img3,
        destTitle: 'Bali Island',
        location: 'Sri Lanka',
        grade: 'CULTURE RELAX',
        fees: '$500',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },

    {
        id:4,
        imgSrc: img4,
        destTitle: 'Bali Island',
        location: 'Sri Lanka',
        grade: 'CULTURE RELAX',
        fees: '$500',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },

    {
        id:5,
        imgSrc: img5,
        destTitle: 'Bali Island',
        location: 'Sri Lanka',
        grade: 'CULTURE RELAX',
        fees: '$500',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },

    {
        id: 6,
        imgSrc: img6,
        destTitle: 'Bali Island',
        location: 'Sri Lanka',
        grade: 'CULTURE RELAX',
        fees: '$500',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },

    {
        id:7,
        imgSrc: img7,
        destTitle: 'Bali Island',
        location: 'Sri Lanka',
        grade: 'CULTURE RELAX',
        fees: '$500',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },

    {
        id:8,
        imgSrc: img8,
        destTitle: 'Bali Island',
        location: 'Sri Lanka',
        grade: 'CULTURE RELAX',
        fees: '$500',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },

    {
        id:9,
        imgSrc: img9,
        destTitle: 'Bali Island',
        location: 'Sri Lanka',
        grade: 'CULTURE RELAX',
        fees: '$500',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },

    {
        id:10,
        imgSrc: img10,
        destTitle: 'Bali Island',
        location: 'Sri Lanka',
        grade: 'CULTURE RELAX',
        fees: '$500',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },

    {
        id:11,
        imgSrc: img11,
        destTitle: 'Bali Island',
        location: 'Sri Lanka',
        grade: 'CULTURE RELAX',
        fees: '$500',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },

    {
        id:12,
        imgSrc: img12,
        destTitle: 'Bali Island',
        location: 'Sri Lanka',
        grade: 'CULTURE RELAX',
        fees: '$500',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },

    {
        id:13,
        imgSrc: img13,
        destTitle: 'Bali Island',
        location: 'Sri Lanka',
        grade: 'CULTURE RELAX',
        fees: '$500',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },

    {
        id:14,
        imgSrc: img14,
        destTitle: 'Bali Island',
        location: 'Sri Lanka',
        grade: 'CULTURE RELAX',
        fees: '$500',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },

]

const Main = () => {
    // react hook to add a scroll animation...

    useEffect(() =>{
        Aos.init({duration: 2000})
    }, [])


    return (
        <section className="main conttainer section">

            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">Most visited destinations</h3>
            </div>

            <div className="secContent grid">

                {
                    Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
                        return (
                            <div data-aos="fade-up" key={id} className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className="icon" />
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className="btn flex">
                                        DETAILS <LuClipboardCheck className="icon" />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

        </section>
    );
}

export default Main
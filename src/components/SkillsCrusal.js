import React, { useEffect, useState } from 'react';


export default function SkillsCrusal() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const data = [
        {
            id: 1,
            img: "https://i.ibb.co/sRcPs7j/Backend-2.jpg",
            disc: "Frontend development involves creating user interfaces and experiences, focusing on design, responsiveness, and performance."
        },
        {
            id: 2,
            img: "https://i.ibb.co/1ZB90ZR/Backend-1.jpg",
            disc: "Backend development involves server-side logic, database management, and ensuring the smooth operation of applications."
        },
        {
            id: 3,
            img: "https://i.ibb.co/wLY6jrW/Untitled-design.jpg",
            disc: "A freelancer works independently, offering specialized services on a project-by-project basis to various clients."
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='carousel-container'>
            <div className="carousel-slide"
                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {data.map((element, index) => (
                    <div
                        key={index}
                        className="carousel-item"
                        style={{
                            backgroundImage: `url(${element.img})`,
                            opacity: index === currentIndex ? 1 : 0, // Show current slide, hide others
                        }}
                    >
                        <div className="carousel-overlay">
                            <div className="carousel-description">
                                {element.disc}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

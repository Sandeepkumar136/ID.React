import React,{useEffect,useState} from 'react';

export default function HomeCom(props) {
    const words = ["Frontend Developer", "Backend Developer", "Fullstack Developer", "Freelancer"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [chartIndex, setChartIndex] = useState(0);
  
    useEffect(() => {
      const type = () => {
        const currentWord = words[currentWordIndex];
        const updatedText = isDeleting 
          ? currentWord.substring(0, chartIndex - 1) 
          : currentWord.substring(0, chartIndex + 1);
        
        setCurrentText(updatedText);
  
        if (!isDeleting && updatedText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000);
        } else if (isDeleting && updatedText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
  
        setChartIndex((prevIndex) => prevIndex + (isDeleting ? -1 : 1));
      };
  
      const typingSpeed = isDeleting ? 50 : 100;
      const timeout = setTimeout(type, typingSpeed);
  
      return () => clearTimeout(timeout);
    }, [currentText, isDeleting, chartIndex, words, currentWordIndex]);
  return (
    <>
    <section className="section-home">
    <div className="index-text-section">
        <div className="heading-contain">
            <h2>
                Hello <br/>i'm Sandeep
                
            </h2>
            <h2 className="typewritter">
                  {currentText}  
            </h2>
        </div>
        <p className="text-contain-index-pera">
            Passionate frontend developer excelling in crafting visually captivating, user-friendly interfaces. Proficient in HTML, CSS, JavaScript, and responsive design. Demonstrates exceptional problem-solving abilities and meticulous attention to detail.
        </p>
        <div className="button-index-contain">
            <button type="button" id="Openlink">free courses</button>
            <button type="button" id="Closelink">explore blog</button>
        </div>

    </div>
    <div className="img-index-contain">
        <img src="https://i.ibb.co/Fq4ydqx/Pics-Art-03-18-copy.jpg" alt="basepfodle" id="img-main"/>
    </div>
</section>
<h1 className="global-heading">
        Recommended courses
    </h1>
    <article className="article">
        <div className="course-card">
            <div className="course-img-contain">
                <img src="https://i.ibb.co/Hx56hSL/IN-Git-Hub-1.jpg" alt="" className="course-img"/>
            </div>
            <div className="text-contain-course">
                <span className="course-span">free course</span>
                <h3 className="heading-course">Node js</h3>
                <p className="text-course">
                    This latest Node.js course comes with premium curriculum that covers everything from basics to advance. On top of that, you will get my handwritten notes of Node.js for completely free. What are you waiting for? Just Enroll Buddy
                </p>
                <button type="button" id="openlink-course">
                    Start learning
                </button>
            </div>
        </div>
        <div className="course-card">
            <div className="course-img-contain">
                <img src="https://i.ibb.co/xLD97cD/IN-Git-Hub.jpg" alt="" className="course-img"/>
            </div>
            <div className="text-contain-course">
                <span className="course-span">free course</span>
                <h3 className="heading-course">React js</h3>
                <p className="text-course">
                React is a free and open-source front-end JavaScript library. This series will cover React from starting to the end. We will learn react from the ground up!
                </p>
                <button type="button" id="openlink-course">
                    Start learning
                </button>
            </div>
        </div>
        <div className="course-card">
            <div className="course-img-contain">
                <img src="https://i.ibb.co/jrxjdMM/IN-Git-Hub-2.jpg" alt="" className="course-img"/>
            </div>
            <div className="text-contain-course">
                <span className="course-span">free course</span>
                <h3 className="heading-course">Python</h3>
                <p className="text-course">
                Python is one of the most demanded programming languages in the job market. Surprisingly, it is equally easy to learn and master Python. Let's commit our 100 days of code to python!
                </p>
                <button type="button" id="openlink-course">
                    Start learning
                </button>
            </div>
        </div>
    </article>
    <h1 className="global-heading testi-head">testimonials</h1>
    <article className="testimonials">
        <div className="testi-card">
            <i className="fa-solid fa-quote-right"></i>
            
            <p className="text-testi">
                I highly recommend BLACKBOX Web Solutions for anyone looking for top-notch web development services. Their commitment to excellence, combined with their creative approach and technical proficiency, makes them the ideal partner for bringing your digital vision to life.
            </p>
            <h2 className="testi-heading">
                Mohit jha
                <span className="testi-role">web developer</span>
            </h2>
        </div>
        <div className="testi-card">
            <i className="fa-solid fa-quote-right"></i>
            
            <p className="text-testi">
                The team at Black Web Solutions took the time to truly understand our business objectives and target audience, ensuring that the website not only looked fantastic but also effectively communicated our brand message. They were responsive to our feedback throughout the entire process and went above and beyond to exceed our expectations.
            </p>
            <h2 className="testi-heading">
                Rishav kumar
                <span className="testi-role">frontend developer</span>
            </h2>
            
        </div>
    </article>
</>
  )
}

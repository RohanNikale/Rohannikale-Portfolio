import React from 'react'
import img2 from '../rohansmall.jpg'
import img from '../rohan.jpg'
import pdf from '../images/Resume.pdf'
const Rohan = () => {
  var x = window.matchMedia("(max-width: 700px)")
  return (
    <>
    <section id="home">
    </section>
    <br />
            <br />
      <div className="main">
        <div className="myImg">
          {x.matches?<img src={img2} alt="" />:<img src={img}/>}

        </div>
        <div className="about">
          <div className="text">

            <h1>I'm Rohan Nikale, a Web Developer
            </h1>
            <p>I am a Full-stack developer with  experience building websites and web applications.  I specialize in JavaScript and I also have experience working with React js, Node js , Express js, Python(Django, Flask) and MongoDB.</p>
            <h3><span><i className="fa-sharp fa-solid fa-envelope"></i>&nbsp;</span><a href="mailto:rohanpandit745@gmail.com" style={{color:'black'}}> rohanpandit745@gmail.com</a></h3>
            <h3><span><i className="fa-solid fa-phone"></i>&nbsp;</span><a href="tel:9021402272" style={{color:'black'}}> +91 9021402272</a></h3>
            <div className="skills">                
            <span>HTML5</span>
              <div className="skill">
                <div className="skillBar" style={{width:'95%'}}></div>
              </div>
              <span>CSS3</span>
              <div className="skill">
                <div className="skillBar" style={{width:'70%'}}></div>
              </div>
              <span>JAVASCRIPT</span>
              <div className="skill">
                <div className="skillBar" style={{width:'80%'}}></div>
              </div>
              <span>REACT.js</span>
              <div className="skill">
                <div className="skillBar" style={{width:'70%'}}></div>
              </div>

              <span>NODE.js</span>
              <div className="skill">
                <div className="skillBar" style={{width:'95%'}}></div>
              </div>
              <span>MongoDB</span>
              <div className="skill">  
                <div className="skillBar" style={{width:'98%'}}></div>
              </div>
            </div>
            <div className="icon">
              <a href="https://www.linkedin.com/in/rohan-nikale-a1a1b922a/"target='_blank'><i className="fa-brands fa-linkedin"></i></a>
              <a href="https://twitter.com/rohan_nikale"target='_blank'><i className="fa-brands fa-twitter" ></i></a>
              <a href="https://www.instagram.com/rohannikale7/"target='_blank'><i className="fa-brands fa-instagram" ></i></a>
              <a href="https://www.facebook.com/RohanNikale07/" target='_blank'><i className="fa-brands fa-facebook"></i></a>
              &nbsp;
              &nbsp;
              <a href={pdf} download><button>Dwonload resume</button></a>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Rohan

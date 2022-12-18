import React from 'react'
import img1 from '../images/icons/webdevloper.png'
import img2 from '../images/icons/frontend.png'
import img3 from '../images/icons/api.png'
const Services = () => {
  return (
    <>
      <section id="services">
      </section>
      <br />
      <br />

    <div className="bg-white">
      

      <div className="Services">
        <h1>Services</h1>
        <div className="items">


          <div className="serviceItem">
            <figure>
              <img src={img1} alt="" />
              <figcaption>
                <h2>Web Development</h2>

              </figcaption>
            </figure>
          </div>


          <div className="serviceItem">
            <figure>
              <img src={img2} alt="" />
              <figcaption>
                <h2>Web Design</h2>

              </figcaption>
            </figure>
          </div>


          <div className="serviceItem">
            <figure>
              <img src={img3} alt="" />
              <figcaption>
                <h2>Rest-Full API</h2>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Services

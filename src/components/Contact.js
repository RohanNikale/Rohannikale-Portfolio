import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  const [contact, setContact] = useState({ name: '', email: '', message: '' })
  const handleinput = (e) => {
    const name = e.target.name
    const value = e.target.value
    setContact({ ...contact, [name]: value })

  }

  const submitform = async (e) => {
    e.preventDefault();
    
    
    const data = fetch('https://portfolio-bakend.vercel.app/', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(contact)
    })
    toast.promise(
      data,
      {
        pending: 'Loading......',
        success: 'Form submited successfully',
        error: 'Form cant\'t be empty'
      }
  )

    setContact({ name: '', email: '', message: '' })
  }
  return (
    <>
      <ToastContainer />
      <section id='contact'>

        <form action="" onSubmit={submitform}>
          <div className="contact">
            <h1>Contact Me</h1>
            <div className="input">
              <input type="text" value={contact.name} placeholder='Full Name' name='name' required onChange={handleinput} />
            </div>
            <div className="input">
              <input type="email" value={contact.email} placeholder='Email' name='email' required onChange={handleinput} />
            </div>
            <div className="input">
              <textarea placeholder='Message' value={contact.message} name="message" id="" required rows="12" onChange={handleinput}></textarea>
            </div>
            <div className="sbutton">
              <button type='submit'>Submit</button>
            </div>
          </div>
        </form>
      </section>
    </>
  )
}

export default Contact

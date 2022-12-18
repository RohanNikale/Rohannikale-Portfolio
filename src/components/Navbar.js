import React from 'react'

const Navbar = (e) => {
    const displayonoff = () => {
        const a = document.getElementsByClassName('ulItems')[0]
        a.classList.toggle("mystyle");
    }
    const navtoggle = () => {
        var x = window.matchMedia("(max-width: 768px)")
        if (x.matches) {
            document.getElementsByClassName('ulItems')[0].classList.remove('mystyle');
        }
    }
    return (
        <>
            <nav>
                <div className="navbar">

                    <div className="logo">
                        <a href="#home">RohanNikale</a>
                        <div className="bar" onClick={displayonoff}>
                            <i className="fa-solid fa-bars"></i>
                        </div>
                    </div>
                    <div className="navItems">
                        <ul className='ulItems'>
                            <li><a href="#home" onClick={navtoggle}>Home</a></li>
                            <li><a href="#services" onClick={navtoggle}>Services</a></li>
                            <li><a href="#contact" onClick={navtoggle}><button>Contact Me</button> </a></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar

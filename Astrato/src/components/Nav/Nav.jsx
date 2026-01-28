import "./nav.scss"

const Nav = () => {
  return (
    <nav>
        <div className="left">
            <span>Services</span>
            <span>Work</span>
            <span>About</span>
        </div>
        <div className="center">
            <span>
                <img src="/logoTop.png" alt="" />
            </span>
            <p>Astratto</p>
        </div>
        <div className="right">
            <span>Careers</span>
            <span className="contact">Contact Us <i class="ri-arrow-right-up-long-line"></i> </span>
        </div>
    </nav>
  )
}

export default Nav

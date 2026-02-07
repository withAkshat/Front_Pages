import "./nav.scss"

const Nav = () => {
  return (
    <nav>
        <div className="left">
            <span className="btn">Services</span>
            <span className="btn">Work</span>
            <span className="btn">About</span>
        </div>
        <div className="center">
            <span>
                <img src="/logoTop.png" alt="" />
            </span>
            <p>Astratto</p>
        </div>
        <div className="right">
            <span className="btn">Careers</span>
            <button className="contact">Contact Us <i class="icon ri-arrow-right-up-long-line"></i></button>
        </div>
    </nav>
  )
}

export default Nav

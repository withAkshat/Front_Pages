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
            <button className="contact">Contact Us <i class="icon ri-arrow-right-up-long-line"></i></button>
        </div>
    </nav>
  )
}

export default Nav

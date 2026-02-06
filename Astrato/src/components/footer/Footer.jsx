import "./footer.scss"

function Footer() {
  return (
    <div className='footer'>
        <div className="upper">
            <p id="title" >Open the door to forging your brand's story</p>
            <h2>Embark on a Transformative Journey Shaping <span id="identity">Your Brand's Destiny</span> Through Our Dedicated Partnership<div className="yellow"></div></h2>
            <p id="desc">Join us on a transformative journey to shape your brand's destiny thorugh our dedicated partnership, crafting a narrative that resonates</p>

            <div className="getStarted">
                <img src="/footer/getStarted.png" alt="" />
            </div>
            <div className="stars">
                <img src="/footer/stars.png" alt="" />
            </div>
        </div>
        <div className="dipper">
            <p id="name">withAkshat!</p>
            <div className="logo">
                <i class="ri-twitter-x-line"></i>
                <i class="ri-linkedin-line"></i>
                <i class="ri-instagram-line"></i>
            </div>
            <div className="right">
                <p>Privacy & Cookie Policy</p>
                <p>Astrato © 2023</p>
            </div>
        </div>
    </div>
  )
}
 
export default Footer

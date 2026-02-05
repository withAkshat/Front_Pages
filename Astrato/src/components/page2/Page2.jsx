import "./page2.scss"


function Page2() {

    return (
        <div className="page2">
            <div className="mainContent">

                <div className="section1">
                    <div className="nav">
                        <h3>Our Services</h3>
                        <p>
                            Discover a wide range of opportunities through a comprehensive range of qualified services.
                        </p>
                    </div>
                    <div className="cards">
                        <div className="card car1">
                            <div className="top">
                                <h3>Motion Graphics</h3>
                                <div className="btn"><i class="ri-arrow-right-up-long-line"></i></div>
                            </div>
                            <div className="bottom">
                                <p>Bring your ideas to life through dynamic visuals and engaging animations</p>
                                <div className="img">
                                    <img src="/page2/firstBlock.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="card card2">
                            <div className="arrow"><i class="ri-arrow-right-up-long-line"></i></div>
                            <div className="top">
                                <h3>2D/3D Animation</h3>
                            </div>
                            <div className="bottom">
                                <p>Turn imagination into reality with our stunning 2D/3D animations.</p>
                                <div className="img">
                                    <img src="/page2/secondBlock.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="card car3">
                            <div className="top">
                                <h3>Visual Identity</h3>
                                <div className="btn"><i class="ri-arrow-right-up-long-line"></i></div>
                            </div>
                            <div className="bottom">
                                <p>Shape a unique brand persona through our comprehensive Visual identity solutions.</p>
                                <div className="img">
                                    <img src="/page2/thirdBlock.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section2">

                    <div className="content">
                        <div className="title">
                            <div className="line"></div>
                            <p>ABOUT ASTRATTO</p>
                        </div>
                        <div className="desc">
                            <h1><span className="yellowArrow"><img src="/page2/yellowArroe.png" alt="" /></span> Our <span className="gray">visionary</span>  <span className="orange">artisans</span> collaborate <span className="purple">seamlessly</span> craft <span className="logo"><img src="/logoTop.png" alt="" /></span> inspiring <span className="gray">experiences,</span> <span className="orange">leaving</span> lasting <span className="gray">imprints</span> on <span className="purple">brands</span> and spaces.</h1>

                        <div className="purpleLine">
                            <img src="/page2/purpleLine.png" alt="" />
                        </div>
                        
                        <div className="star">
                            <img src="/page2/star.png" alt="" />
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default Page2;
import "./page3.scss";

function Page3() {
    return (
        <div className="page3">
            <div className="content">
                <div className="nav">
                    <h3>Recent Projects</h3>
                    <p>step into the world of most recent projects a showcase of unwavering commitment to progressive design</p>
                </div>

                <div className="cards">
                    <div className="block">
                        <div className="card card1">
                            <div className="img">
                                <img src="/page3/img1.png" alt="" />
                                <div className="arrow">
                                    <i class="ri-arrow-right-up-long-line"></i>
                                </div>
                                <div className="animation">
                                    <p>2D Animation</p>
                                </div>
                            </div>
                            <div className="text">
                                <h3>The Lighthouse</h3>
                                <p>Adding a new dimension to projects through thoughtfully designed 2D animations</p>
                            </div>
                        </div>
                        <div className="card card2">
                            <div className="img">
                                <img src="/page3/compass.png" alt="" />
                                <div className="arrow">
                                    <i class="ri-arrow-right-up-long-line"></i>
                                </div>
                                <div className="animation">
                                    <p>Motion Graphics</p>
                                </div>
                            </div>
                            <div className="text">
                                <h3>Navigating Possibilities</h3>
                                <p>Motion graphics breathe life into the project, blending direction and creativity</p>
                            </div>
                        </div>
                    </div>
                    <div className="block two">
                        <div className="card card3">
                            <div className="img">
                                <img src="/page3/home.png" alt="" />
                                <div className="arrow">
                                    <i class="ri-arrow-right-up-long-line"></i>
                                </div>
                                <div className="animation">
                                    <p>Visual Identity</p>
                                </div>
                            </div>

                            <div className="text">
                                <h3>Snowscape Haven</h3>
                                <p>Crafting a visual identity that mirrors the serenity and allure of winter sanctuary</p>
                            </div>
                        </div>
                        <div className="card card4">
                            <div className="img">
                                <img src="/page3/window.png" alt="" />
                                <div className="arrow">
                                    <i class="ri-arrow-right-up-long-line"></i>
                                </div>
                                <div className="animation">
                                    <p>3D Animation</p>
                                </div>
                            </div>

                            <div className="text">
                                <h3>Nocturnal Symphony</h3>
                                <p>Through 3D artistiry, we orchestrate an animated ode to the evening, a dance of shadows and dreams</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page3

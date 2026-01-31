import "./page1.scss";

function Page1() {

    return <div className="page1">

        <div className="btns">
            <div className="first">
                <p>Via della Creativā, 23</p>
            </div>
            <div className="second">
                <p>20121 Milano</p>
            </div>
        </div>

        <div className="leftImg">
            <img src="/homeLeftImg.png" alt="" />
        </div>
       
        <div className="rightImg">
            <img src="/homeRightImg.png" alt="" />
        </div>

        <div className="curveLine">
            <img src="/curveLine.png" alt="" />
        </div>
        
        <div className="curveLine2">
            <img src="/curverLine2.png" alt="" />
        </div>

        <div className="createBtn">
            <p>Create Magic</p>
            <span><img src="/clickBtn.png" alt="" /></span>
        </div>

        <div className="text">
            <p>Ignition the Spark of Inspiration</p>
            <h1>Unleash Your Brand <span className="centerLogo"> <img src="/centerLogo.png" alt="" /></span> with Our <span className="magicoText">Mágico</span> Design</h1>
        </div>
        <div className="magico"></div>
    </div>
}

export default Page1
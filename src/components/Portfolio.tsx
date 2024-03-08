const Portfolio = () =>{
    return(
        <section className="portfolio" id="portfolio">
        <h2 className="heading">Latest <span>Projects</span></h2>
        <div className="portfolio-container">
            <div className="portfolio-box">
                <img src="Portfolio.jpg" alt=""/>
                <div className="portfolio-layer">
                    <h4>Web Design</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <i className="fa-solid fa-up-right-from-square"></i>
                </div>
            </div>
            <h4 className="heading">Coming <span>Soon !</span></h4>
        </div>
        </section>  
    )
}
export default Portfolio
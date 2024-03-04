const About = () =>{
    return(
        <section className=" flex justify-between-center items-center gap-8 bg-[#262840]" id="about">
        <div className=" w-[80vw]">
            <img src="About1.jpeg" alt=""/>
        </div>
        <div className="about-content">
        <h2 className=" items-center text-[45px] text-left leading-5">ABOUT <span>Me</span></h2>
        <h3 className=" text-[2.6rem]">Frontend Developer</h3>  
        <p className=" text-[2rem] mx-0 ml-12 mr-8">I am currently a student at <a href="https://www.nit.ac.in/" target="_blank"><span>Narula Institute of Technology</span></a> pursuing a Bachelor of Technology Degree in <span>Information Technology</span>.</p> 
        
        <a href="#" className="btn">Read more</a>
        </div>
    </section>
    )
}
export default About
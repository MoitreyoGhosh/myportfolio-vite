import { FaInstagram, FaLinkedin, FaGithubSquare } from "react-icons/fa";
const Home = () => {
  return (
    <section className=" flex justify-between items-center" id="home">
    <div className="home-content">
        <h3 className=" text-[3.2rem] font-bold">Hi, Myself</h3>
        <h1 className=" text-[5.6rem] font-bold leading-relaxed">Moitreyo Ghosh</h1>
        <h3 className=" text-[3.2rem] font-bold mb-8">And I'm a <span className="multiple-text bg-[#5982F4]"></span></h3>
        <p className=" text-[2rem]">Beginner Frontend Web Developer and Inquisitive Coder.</p>
        <div className="flex justify-center items-center gap-8 social-media">
            <a href="https://www.instagram.com/moitreyo_ghosh?igsh=M3hoYWM4d3kwczAw" target="_blank"><FaInstagram size={22} /></a>
            <a href="https://www.linkedin.com/in/moitreyo-ghosh-6132372b7/" target="_blank"><FaLinkedin size={22} /></a>
            <a href="https://github.com/MoitreyoGhosh" target="_blank"><FaGithubSquare size={22} /></a>  
        </div>
    </div>
    <div className=" w-[25vw] home-img">
        <img src="avatar.png" alt=""/>
    </div>
</section>
  )
}
/*className=" inline-flex justify-center items-center w-[4rem] h-[4rem] bg-[#5982F4] border-spacing-1 border-r-[#5982F4] bg-transparent text-[2rem] mt-[3rem] mr-[1.5rem] mb-[3rem] ml-[0] rounded-[50%] */
export default Home
import { FaInstagram, FaLinkedin, FaGithubSquare } from "react-icons/fa";
const Home = () => {
  return (
    <section className="home" id="home">
    <div className="home-content">
        <h3>Hi, Myself</h3>
        <h1>Moitreyo Ghosh</h1>
        <h3>And I'm a <span className="multiple-text"></span></h3>
        <p>Beginner Frontend Web Developer and Inquisitive Coder.</p>
        <div className="social-media">
            <a href="https://www.instagram.com/moitreyo_ghosh?igsh=M3hoYWM4d3kwczAw" target="_blank"><FaInstagram size={22} /></a>
            <a href="https://www.linkedin.com/in/moitreyo-ghosh-6132372b7/" target="_blank"><FaLinkedin size={22} /></a>
            <a href="https://github.com/MoitreyoGhosh" target="_blank"><FaGithubSquare size={22} /></a>  
        </div>
    </div>
    <div className="home-img">
        <img src="avatar.png" alt=""/>
    </div>
</section>
  )
}

export default Home
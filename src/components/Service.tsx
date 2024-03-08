const Service=() =>{
    return(
        <section className="services" id="services">
    <h2 className="heading">My <span>Services</span></h2>
    <div className="services-container">
        <div className="services-box">
            <i className="fa-solid fa-code"></i>
            <h3>Web Development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eaque quae ex sit molestiae obcaecati neque, autem nulla minus unde dolor? Sit quo, enim similique aliquam optio quas tenetur ducimus.</p>
            <a href="#" className="btn">Read More</a>
        </div>
        <div className="services-box">
            <i className="fa-brands fa-android"></i>
            <h3>App Development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eaque quae ex sit molestiae obcaecati neque, autem nulla minus unde dolor? Sit quo, enim similique aliquam optio quas tenetur ducimus.</p>
            <a href="#" className="btn">Read More</a>
        </div>
   </div>
</section>
    )
}
export default Service
const Header = () => {
  return (
    <header className="sticky top-0 left-0 w-full flex justify-between items-center bg-[#191f36] py-5 px-[9%]">
        <a href="#" className=" text-[25px] font-bold text-white cursor-default">Portfolio</a>

        <i className="fa-sharp fa-solid fa-bars" id="menu-icon"></i>

        <nav className="flex items-center justify-center gap-4 ">
            <a href="#home" className='text-white hover:text-[#5982f4] hover:shadow-sm font-bold text-[15px]'>Home</a>
            <a href="#about" className='text-white hover:text-[#5982f4] hover:shadow-sm font-bold text-[15px]'>About</a>
            <a href="#skills" className='text-white hover:text-[#5982f4] hover:shadow-sm font-bold text-[15px]'>Skills</a>
            <a href="#services" className='text-white hover:text-[#5982f4] hover:shadow-sm font-bold text-[15px]'>Services</a>
            <a href="#portfolio" className='text-white hover:text-[#5982f4] shadow-sm font-bold text-[15px]'>Portfolio</a>
            <a href="#contact" className='text-white hover:text-[#5982f4] shadow-sm font-bold text-[15px]'>Contact</a>
        </nav>
    </header>
  )
}

export default Header
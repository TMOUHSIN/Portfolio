import './app.css';

function Header() {
    const handleScroll = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <div className="navbar">
                <h2>tananimouhsin@gmail.com</h2>
                <ul>
                    <li><a href="#about" onClick={(e) => handleScroll(e, 'about')}>ABOUT</a></li>
                    <li><a href="#services" onClick={(e) => handleScroll(e, 'services')}>SERVICES</a></li>
                    <li><a href="#skills" onClick={(e) => handleScroll(e, 'skills')}>SKILLS</a></li>
                    <li><a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>PROJECTS</a></li>
                    <li><a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>CONTACT</a></li>
                </ul>
            </div>
        </>
    );
}

export default Header;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import picture from './assets/p.svg'

function About(){
    const downloadFile = () => {
        const url = '/C:\Users\KIRIGAYA\Desktop\portfolio\PORTFOLIO\public\MouhsinTanani_CV.pdf'; // Path to the PDF file in the public directory
        const link = document.createElement('a');
        link.href = url;
        link.download = 'MouhsinTanani_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // Clean up
      };
    return(
        <>
        <div className="about">
        <div className="about-infos">
            <h1>I'm Mouhsin</h1>
            <h1 >Full Stack Developer <br /> UI/UX Designer</h1>
            {/* <h2>UI/UX Designer</h2> */}
            <p>building sleek websites and mobile apps<br />
                 with interfaces that feel like second<br />
                  nature to users </p>
            <div className="about-buttons">

                <button onClick={downloadFile}>Download CV</button>
                {/* <div className="about-links"> */}
                    <a href="https://www.linkedin.com/in/mouhsin-tanani-692b87263/" >
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                {/* </div> */}
            </div>
        </div>
        <div className="aboutpic">
        <img src={picture} alt="" />
        </div>
        </div>
        </>
    )
}

export default About

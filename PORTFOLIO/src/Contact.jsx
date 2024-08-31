import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import {  } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';
function Contact(){
 return(
    <>
    <div className="contact">
    <ContactInputs/>
    <div className="contact-cards">
    <ContactCards icon={faEnvelope} contact="tananimouhsin@gmail.com"/>
    <ContactCards icon={faPhone} contact="+212 687011468"/>
    <ContactCards icon={faLinkedin} contact="Tanani Mouhsin"/>
    </div>
    </div>
    </>
 )
}



function ContactInputs(){

  
        function sendEmail(e) {
          e.preventDefault();
      
          emailjs.sendForm('service_sczmvsd', 'template_9sil3mw', e.target, 'QYF1XGi7szYzx2Gb6')
            .then((result) => {
                console.log('Email successfully sent:', result.text);
            }, (error) => {
                console.log('Error in sending email:', error.text);
            });
      
          e.target.reset(); // Optionally reset the form after sending
        }
    return(
        <>
        <div className="contact-inputs">
        <   h1>Let's work together ! </h1>
        <form onSubmit={sendEmail}>
            <div className="inputs-1">
                <input type="text" name="first_name" placeholder="First Name" required/>
                <input type="text" name="last_name" placeholder="Last Name" required/>
            </div>

            <div className="inputs-1">
                <input type="email" name="email" placeholder="Email" required/>

                <input type="text" name="phone_number" placeholder="Phone Numebr" required/>
            </div>
            <div className="inputs-2">
                {/* <input type="text" name="subject" placeholder="Subject" /> */}
                <select name="subject" required>
                <option value="ui-ux-design" name >Subject</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="web-application-development">Web Application Development</option>
                    <option value="mobile-app-development">Mobile App Development</option>
                </select>
                <textarea  name="message"  placeholder="Message.." rows="10" required/>
            </div>
            <button type="submit">Send Message</button>

        </form>

        </div>
        
        </>
    )
}

function ContactCards(props){
    return(
        <>

            <div className="contact-card">
                <div className="contact-icon">
                    <p><FontAwesomeIcon icon={props.icon} size="3x" /></p>
                </div>
           
                <h3>{props.contact}</h3>
            </div>
            
        </>
    )
}
export default Contact

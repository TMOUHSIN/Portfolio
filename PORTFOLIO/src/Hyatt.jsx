import Header from './Header.jsx';
import Description from './Description.jsx';
import ImageCarousel from './Images.jsx';
import hyatt from './assets/hyattstay.jpg'
import health from './assets/healthviewai.jpg'
import agrishop from './assets/agrishop.jpg'
import h1 from './hyattstay/1.jpg'
import h2 from './hyattstay/2.jpg'
import h4 from './hyattstay/4.jpg'
import h5 from './hyattstay/5.jpg'
import h6 from './hyattstay/6.jpg'
import h7 from './hyattstay/7.jpg'
import h3 from './hyattstay/3.jpg'

function Hyatt(){
    const images = [
        h1,h2,h3,h4,h5,h6,h7
      ];
    return(
        <>
        <div className="healthpage">
            <Header/>
            <ImageCarousel images={images} />
            <Description Description1="Overview: HyattStay is a comprehensive mobile application designed to revolutionize the hotel booking experience. It offers a modern, intuitive interface that simplifies the process of finding and booking accommodations. The app aims to enhance the travel experience by providing a seamless and efficient platform for hotel reservations." 
            Description2="User Features: Users of HyattStay can easily search for and book hotel rooms across various Hyatt properties. The app allows them to view detailed information about hotel amenities and events, ensuring they have all the information needed to make informed decisions. Additionally, users can provide feedback and reviews based on their stay, helping future travelers make better choices." 
            Description3="Administrator Features: For administrators, HyattStay provides robust tools for managing hotel operations. They can oversee and manage hotel listings, room availability, events, and reservations. The app also includes functionalities for reviewing and responding to user feedback, ensuring that all aspects of hotel management are handled efficiently and effectively." 
            Tools="Technologies Used: HyattStay is developed using Flutter for a responsive and engaging user interface, while Nest.js supports the backend operations. The app leverages PostgreSQL for secure and scalable database management, ensuring that all data is handled with the highest level of reliability and performance."/>
        </div>
        </>
    )
}

export default Hyatt
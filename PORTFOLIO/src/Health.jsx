import Header from './Header.jsx';
import Description from './Description.jsx';
import ImageCarousel from './Images.jsx';
import hyatt from './assets/hyattstay.jpg'
import health from './assets/healthviewai.jpg'
import agrishop from './assets/agrishop.jpg'

import h1 from './healthview/1.jpg'
import h2 from './healthview/2.jpg'
import h3 from './healthview/3.jpg'
import h4 from './healthview/4.jpg'

function Health(){
    const images = [
        h1,h2,h3,h4
      ];
    return(
        <>
        <div className="healthpage">
            <Header/>
            <ImageCarousel images={images} />

            <Description Description1="Overview: HealthView AI is a cutting-edge mobile application designed to enhance personal health management. It provides users with innovative features to monitor and assess various health conditions. By leveraging advanced technology, the app aims to offer valuable insights into users' health and well-being." 
            Description2="Blood Test Scan: The application includes a sophisticated blood test scanning feature that extracts and records patient information from test results. In addition to capturing current test data, the app maintains a history of previous blood tests. This allows users to track changes over time, compare results, and monitor their health more effectively. The information is accurately captured and systematically stored, facilitating efficient management of health records." 
            Description3="Heart Failure and Brain Stroke Models: HealthView AI incorporates advanced classification models to assess heart failure and brain stroke risks. These models analyze health data to provide accurate predictions and insights, helping users understand their health status and take timely actions if necessary." 
            Tools="Technologies Used: The app is developed using Flutter for a seamless and responsive frontend experience, while Nest.js powers the backend operations. The AI components are built with Python, TensorFlow, and scikit-learn, ensuring robust and effective health assessments. PostgreSQL is used to manage and store user data securely."/>
        </div>
        </>
    )
}
export default Health
import hyatt from './assets/hyattstay.jpg'
import health from './assets/healthviewai.jpg'
import agrishop from './assets/agrishop.jpg'


function Projects(){
    const navigateToHealthPage = ()=>{
        window.location.href = "/HealthViewAI.app";
    }
    const navigateToHyattPage = ()=>{
        window.location.href = "/HyattStay.app";
    }
    const navigateToAgrishop = ()=>{
        window.location.href = "http://agrishop.wuaze.com/shop/home.php";
    }
    return(
        <>
        <div className="projects">
            <h1>My Projects</h1>
            <div className="projects-cards">
            <ProjectCard function={navigateToHealthPage}img={health} 
            name="HealthView.AI" 
            description="A mobile app utilizing AI models for healthcare
             diagnostics, including blood test scanning, heart failure,
              and brain stroke detection. Developed with Flutter, Nest.js,
               Python, TensorFlow, and PostgreSQL."
               color= "rgba(8, 131, 149, 1)"/>
            <ProjectCard function={navigateToHyattPage} img={hyatt} 
            name="Hyatt Stay" 
            color= "rgba(10, 57, 63, 1)"
            description="A comprehensive booking platform for users to reserve
             hotel rooms, view events, and provide feedback. Administrators can
              manage hotel operations, all built using Flutter, Nest.js, and
               PostgreSQL."/>
            <ProjectCard  function={navigateToAgrishop} img={agrishop} 
            name="Agrishop" 
            color= "rgba(10, 126, 64, 1)"
            description="A platform designed to connect farmers and buyers,
             facilitating the sale and purchase of agricultural products.
              Developed with a focus on efficiency and ease of use."/>
</div>
        </div>
        </>
    )
}
function ProjectCard(props){
    return(
        <>
        <div className="project-card">
            <img onClick={props.function} src={props.img} alt="" />
            <h2 style={{color : props.color}}>{props.name}</h2>
            <p style={{color : props.color}}>{props.description}</p>
        </div>
        </>
    )
}
export default Projects
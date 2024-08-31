function Services(){
    return(
        <>
        <div className="Services">
        <h1>Services</h1>
        <div className="Service-cards">
        
        <ServiceCard
         title = "UI/UX Design"
          point1="Intuitive user journeys" 
          point2="Visual design excellence"  
          point3="Responsive and accessible design"/>
        <ServiceCard
         title = "Web Development"
          point1="Full-stack development" 
          point2="Performance optimization"  
          point3="Scalable solutions"/>        
          <ServiceCard
          title = "Mobile App Development"
           point1="iOS & Android Apps" 
           point2="User-centric design"  
           point3="Cross-platform development"/>
           </div>
           </div>
        </>
    )
}

function ServiceCard(props){
    return(
        <>
        <div className="service-card">
            <h2>{props.title}</h2>
            <ul>
                
                <li><h3>{props.point1}</h3></li>
                <li><h3>{props.point2}</h3></li>
                <li><h3>{props.point3}</h3></li>

            </ul>
        </div>
        
        </>
    )
}
export default Services     
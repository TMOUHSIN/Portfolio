function Description(props){
    return(
        <>
        <div className="app-text">
            <div className="app-description">
                <h1>Description</h1>
                <p>{props.Description1}</p>
                <p>{props.Description2}</p>
                <p>{props.Description3}</p>
                
            </div>
            <div className="app-tools">
                <h1>Tools</h1>
                <p>{props.Tools}</p>
            </div>
        </div>
        </>
    )
}
export default Description
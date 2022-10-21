import React from "react"

export default function Main(props) {
    console.log(props)
    return (
        <div className="travel-container">
            <div className="travel-item">
                <div>
                    <img className="dest-img" src={props.imageUrl} />
                </div>
                
                <div className="country-content">
                    <div className="country-container">
                        <img src="location.png" />
                        <h3 className="country-name">{props.location}</h3>
                        <a className="link" target="_blank" href={props.googleMapsUrl}> View on google maps </a>
                    </div>
                    <h1 className="dest-title">{props.title}</h1>
                    <p className="date"> {props.startDate} - {props.endDate} </p>
                    <p className="desc"> {props.description} </p>
                </div>
            </div>
        </div>
        
        
        
    )
}

// <div>
//                 <div>
//                     <img />
//                 </div>
                
//                 <div>
//                     <div>
//                         <h3> </h3>
//                         <a> </a>
//                     </div>
//                     <h1> </h1>
//                     <p> </p>
//                     <p> </p>
//                 </div>
//             </div>
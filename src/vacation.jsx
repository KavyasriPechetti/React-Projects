import React from "react";
 
function Vacation() {
    var [arr,setArr]=React.useState([
        {
            image:"https://i.pinimg.com/originals/92/70/9b/92709b0c0acbe201f3aa135bd36823ef.jpg",
            heading:"Best of India in 7 days",
            cost:"$2000",
            desc:"India is both a beautiful and varied country and features many different landscapes. It is a beautiful destination surrounded by cold mountains, dry deserts, vast plains, hot and humid plateaus vast beaches and tropical islands.It is a country that offers something for everyone and every type of tourist. The diversity of the destinations, the ease of access and affordability have made India one of the most sought-after tourist destinations in Asia."
        },
        {
            image:"https://www.planetware.com/photos-large/F/france-paris-eiffel-tower.jpg",
            heading:"Best of Paris in 7 days",
            cost:"$5000",
            desc:"It is overwhelmed with culture, history, iconic architecture, arty treasures, delicious food and exciting fashion.Paris is known for its many monuments, especially the Eiffel Tower, Notre-Dame Cathedral, Arc de Triomphe, Opéra Garnier, Les Invalides, etc.Paris was home to some of the best artists through history; hence, it harbors treasures and antiques from the masters like Picasso, Van Gogh, Monet, Dalí, and Renoir. Paris (and the whole of France) is famous for its food and drinks; from cozy little cafes to one of its many Michelin-starred restaurants "
        },
        {
            image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/01/e7/51/caption.jpg?w=1200&h=-1&s=1",
            heading:"Best of Dubai in 7 days",
            cost:"$8000",
            desc:"The people of Dubai have converted desert into a modern-day Oasis. It boasts of some of the most spectacular buildings and skyscrapers. The country is home to many famous luxury hotels such as the Atlantis Palm, where guests can stay in an underwater room, enjoy an indoor theme park and a shopping mall.The city of gold AKA Dubai is a truly international country and one of the seven Emirates in UAE. Dubai is among the handful of countries in Asia that have developed in line with western technology but retained their Eastern sensibility."
        },
        {
            image:"https://traveltradejournal.com/wp-content/uploads/2022/09/IMG-6323.jpg",
            heading:"Best of South Korea in 7 days",
            cost:"$3000",
            desc:"South Korea is a traveler's paradise divide by a fierce border. However, the south-east nation offers its visitors a wide variety of experiences, breathtaking landscapes and an unmatched cultural and historical journey.The Korean flag Cleary symbolizes the countries separation from the former nation of Korea, but the blue and red circle on the flag is also an indication of how the country has embraced a modern lifestyle all the while preserving its ancient traditions. On the one hand, Korea is commonly referred to as the Land of the Morning Calm,and on the other hand, its capital city of Seoul is a busy metropolitan with a constant hustle and bustle. The city is operational 24*7, and at every corner, you will find a taxi or subway station, cafes and restaurants and information booths. As a tourist its very unlikely that you will feel lost here."
        } 
    ]
    )
    function del(index) {
        const newarr=[...arr];
        newarr.splice(index,1);
        setArr(newarr);
    }
   
    return (
        <div className="main">
        
            <div className="img">
                <h1 style={{fontFamily:"bold"}}>Welcome to Edupoly Tourism</h1>
                {
                    arr.map((a,index)=>{return(
                        <div style={{display:"flex", justifyContent: "center"}}>

                            <div id="d1">
                            <img style={{width:"594px",height:"400px"}} id="im" src={a.image} alt={a.heading}/>
                            <div id="d2">
                            <div style={{display:"flex", justifyContent:"space-between"}}>
                                <h3>{a.heading}</h3>
                                <span><h3>{a.cost}</h3></span>
                            </div>
                            <div>
                                <p>{a.desc}</p>
                            </div>
                            <div>
                                <button onClick={()=>{del(index)}} className="btn btn-primary">Not Intrested</button>
                            </div>
                            </div>
                        </div>
                        </div>
                        
                    )})
                }
                
                 
            </div>


       
    </div>
    )
}
export default Vacation;
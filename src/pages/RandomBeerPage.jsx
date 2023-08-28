import { useState, useEffect } from "react";
import axios from "axios";

function RandomBeersPage() {

    const [beer, setBeer] = useState ()

    useEffect ( () => {
        getBeer()
       },[] )
       
       const getBeer = async () => {
           try {
               const response = await axios.get ("https://ih-beers-api2.herokuapp.com/beers/random")
               console.log ("response one beer", response)
               setBeer(response.data)
           } catch (error) {
               console.log (error)
            
           }
       }
       
       if (beer === undefined) {
           return <h3>just a second</h3>
       }

    return (
        <div className="beerDetails" >
       
      
        
        <img src={beer.image_url}  alt="" width="150px" />
        <h3>{beer.name} </h3>
        <h4>{beer.tagline} </h4>
 <p>{beer.first_brewed} </p>
        <p>{beer.description} </p>
        <p>{beer.contributed_by} </p>
     
    </div>

    )

}

export default RandomBeersPage;

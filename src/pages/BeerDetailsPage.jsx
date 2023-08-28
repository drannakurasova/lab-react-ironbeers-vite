import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BeerDetailsPage() {

    const params = useParams()
    console.log ("params", params)
    const [beer, setBeer] = useState ()

    useEffect ( () => {
        getBeer()
       }, [params.beerId] )
       
       const getBeer = async () => {
           try {
               const response = await axios.get (`https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`)
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

export default BeerDetailsPage;

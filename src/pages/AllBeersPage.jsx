import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {

const [beers, setBeers] = useState()

useEffect ( () => {
 getBeer()
}, [] )

const getBeer = async () => {
    try {
        const response = await axios.get ("https://ih-beers-api2.herokuapp.com/beers")
        console.log ("response", response)
        setBeers(response.data)
    } catch (error) {
        console.log (error)
     
    }
}

if (beers === undefined) {
    return <h3>just a second</h3>
}

return (
    <div>
        {beers.map((eachBeer) => {
            return (
                <div key={eachBeer._id} >
                    <Link to={`/beers/${eachBeer._id}`}> 
                  
                    
                    <img src={eachBeer.image_url}  alt="" width="20%"/>
                    <h3>{eachBeer.name} </h3>
                    <h4>{eachBeer.tagline} </h4>
                    <p>{eachBeer.contributed_by} </p>
                     </Link>
                </div>
            )
        } )}

    </div>
)
}

export default AllBeersPage;

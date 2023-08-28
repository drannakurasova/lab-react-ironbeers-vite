import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className = "homePage">
           
   <Link to="/beers">  <img src="/src/assets/beers.png" alt=""/>
   <h3>All beers</h3></Link>
   <Link to="/random-beer">  <img src="/src/assets/random-beer.png" alt=""/>
   <h3>Random Beer</h3></Link>
   <Link to="/new-beer">  <img src="/src/assets/new-beer.png" alt=""/><h3>New Beer</h3></Link>
   </div>
    )
}

export default HomePage;

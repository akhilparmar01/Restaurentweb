import{restaurantList} from "../contants";
import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";

import Shimmer from "./Shimmer";

 // 9 restaurants = > filtered Data "Burger king" inside the restrurentslist
 function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
  
    return filterData;
  }
  
const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRrestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
 

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  if (!allRestaurants) return null;
 if(filteredRrestaurants?.length===0)return <h1> No restaurents Match your Filter</h1>;
  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
    <div className="search-container">
<input type="text" 
className="search-input" 
placeholder="search"
value={searchText}
onChange={(e) => {
  setSearchText(e.target.value);
}}
/>

<button 
className="search-btn" 
onClick={() => {
    //need to filter the Data
const data = filterData(searchText,allRestaurants);
// update the state - restaurents
setFilteredRestaurants(data);

}}
>Search
</button>


    </div>
<div className="restaurent-list">

{filteredRrestaurants.map((restaurant) =>{
return(
<RestrauntCard  {...restaurant.data} key={restaurant.data.id}/>
);
})};

</div>
</>
);
    };
    export default Body;



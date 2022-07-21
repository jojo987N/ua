 import Sidebar from "../../components/sidebar/Sidebar";
 import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
 import Widget from "../../components/widget/Widget";
 import Featured from "../../components/featured/Featured";
 import Chart from "../../components/chart/Chart";
 import Table from "../../components/table/Table";
import List from "../../components/table/Table";
// import { useContext } from "react";
//import { AuthContext } from "../../context/Auth";
import { RestaurantContext } from "../../context/RestaurantContext";
import { useContext } from "react";

const Home = () => {

  const {currentRestaurant} = useContext(RestaurantContext)
  const space = " "

 // console.log(currentRestaurant)

  return (
    
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
         
        <div className="folders">
           
        <table>
<tbody>
<tr><td>📦components&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <i style={{color:"grey"}}>All components share between all screens</i></td>
</tr>
<tr><td> ┣ 📂home &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i style={{color:"grey"}}>Components in Home screen</i></td></tr>
<tr><td> ┃ ┣ 📜Categories.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i style={{color:"grey"}}>Horizontal <a href="https://reactnative.dev/docs/flatlist"> Flatlist</a> displaying Categories items </i></td></tr>
<tr><td> ┃ ┣ 📜HeaderTabs.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i style={{color:"grey"}}> Buttons to navigate between pickup and delivery screen </i></td></tr>
<tr><td> ┃ ┣ 📜HomeHeader.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i style={{color:"grey"}}>Contain menu and filter icon component</i></td></tr>
<tr><td> ┃ ┣ 📜RestaurantItems.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i style={{color:"grey"}}>Restaurant image , name, ratings , view component  </i></td></tr>
<tr><td> ┃ ┗ 📜SearchBar.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i style={{color:"grey"}}><a href="https://www.npmjs.com/package/react-native-google-places-autocomplete">Google Maps Search</a> Component  </i></td></tr>
<tr><td> ┣ 📂restaurantDetail <i style={{color:"grey"}}>Components in Restaurant details screen</i></td></tr>
<tr><td> ┃ ┣ 📜About.js <i style={{color:"grey"}}>Contain restaurant ratings, categories,price size, opening time</i></td></tr>
<tr><td> ┃ ┣ 📜MenuItems.js <i style={{color:"grey"}}>Menu image, title, description views </i></td></tr>
<tr><td> ┃ ┣ 📜OrderItem.js</td></tr>
<tr><td> ┃ ┣ 📜RestaurantDetailHeader.js <i style={{color:"grey"}}>Menu items search food by group</i></td></tr>
<tr><td> ┃ ┗ 📜ViewCart.js</td></tr>
<tr><td> ┣ 📜Cart.js</td></tr>
<tr><td> ┣ 📜CartModal.js</td></tr>
<tr><td> ┣ 📜Checkout.js</td></tr>
<tr><td> ┣ 📜CookingProgress.js</td></tr>
<tr><td> ┣ 📜DishListItem.js</td></tr>
<tr><td> ┣ 📜DisplayMapview.js</td></tr>
<tr><td> ┣ 📜DisplayPreferences.js</td></tr>
<tr><td> ┣ 📜DrawerContent.js</td></tr>
<tr><td> ┣ 📜FilterModal.js</td></tr>
<tr><td> ┣ 📜GroupFoodHeader.js</td></tr>
<tr><td> ┣ 📜List.js</td></tr>
<tr><td> ┣ 📜Loading.js</td></tr>
<tr><td> ┣ 📜MaxDeliveryFee.js</td></tr>
<tr><td> ┣ 📜OrderCountDown.js</td></tr>
<tr><td> ┣ 📜OrderListItem.js</td></tr>
<tr><td> ┣ 📜PreferenceScreen.js</td></tr>
<tr><td> ┣ 📜ProgressComponent.js</td></tr>
<tr><td> ┣ 📜Quantity.js</td></tr>
<tr><td> ┣ 📜RestaurantDescription.js</td></tr>
<tr><td> ┣ 📜RestaurantDetailComponent.js</td></tr>
<tr><td> ┣ 📜RestaurantName.js</td></tr>
<tr><td> ┣ 📜Reward.js</td></tr>
<tr><td> ┣ 📜SearchComponent.js</td></tr>
<tr><td> ┗ 📜menusByGroup.js</td></tr>
</tbody>
</table>

 

 
        </div>

        
        
      </div>
    </div>
  );
};

export default Home;
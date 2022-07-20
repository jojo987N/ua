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

 // console.log(currentRestaurant)

  return (
    
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
         
        <div className="folders">
           
        <table>
<tbody>
<tr><td>📦components</td>
<td>All components share between all screens</td></tr>
<tr><td> ┣ 📂home</td></tr>
<tr><td> ┃ ┣ 📜Categories.js</td></tr>
<tr><td> ┃ ┣ 📜HeaderTabs.js</td></tr>
<tr><td> ┃ ┣ 📜HomeHeader.js</td></tr>
<tr><td> ┃ ┣ 📜RestaurantItems.js</td></tr>
<tr><td> ┃ ┗ 📜SearchBar.js</td></tr>
<tr><td> ┣ 📂restaurantDetail</td></tr>
<tr><td> ┃ ┣ 📜About.js</td></tr>
<tr><td> ┃ ┣ 📜MenuDetailItems.js</td></tr>
<tr><td> ┃ ┣ 📜MenuItems.js</td></tr>
<tr><td> ┃ ┣ 📜OrderItem.js</td></tr>
<tr><td> ┃ ┣ 📜RestaurantDetailHeader.js</td></tr>
<tr><td> ┃ ┣ 📜TabviewComponent.js</td></tr>
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
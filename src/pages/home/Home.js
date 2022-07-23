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
import {Card} from 'antd'

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
           
        <Card title={"Folder Structure"} style={{margin: 20}}>

        <table >
<tbody>
 
<tr><td>📦uber-eats-clone</td></tr>
<tr><td> ┣ 📂assets</td>
<td><i style={{marginLeft: 20,color:"grey"}}>Any file that the app need at runtime, contain all static image files, icons, animations, fonts </i></td></tr>

<tr><td> ┣ 📂components</td>
<td><i style={{marginLeft: 20,color:"grey"}}>Contain all components shared between screens, all applications, reusable and UI components </i></td></tr>
<tr><td> ┣ 📂contexts</td>
<td><i style={{marginLeft: 20,color:"grey"}}>Context is designed to share data that can be considered global to a component tree </i></td></tr>
<tr><td> ┣ 📂navigation</td></tr>
<tr><td> ┣ 📂node_modules</td></tr>
<tr><td> ┣ 📂redux</td></tr>
<tr><td> ┣ 📂screens</td></tr>
<tr><td> ┣ 📜.gitignore</td></tr>
<tr><td> ┣ 📜App.js</td></tr>
<tr><td> ┣ 📜README.md</td></tr>
<tr><td> ┣ 📜babel.config.js</td></tr>
<tr><td> ┣ 📜data.js</td></tr>
<tr><td> ┣ 📜firebase.js</td></tr>
<tr><td> ┣ 📜global.js</td></tr>
<tr><td> ┣ 📜package.json</td></tr>
<tr><td> ┣ 📜utils.js</td></tr>
<tr><td> ┗ 📜yarn.lock</td></tr>
</tbody>
</table>

          {/* <table style={{marginLeft: 40}}>
          <tbody>
          <tr><td>📦.expo
            <i style={{marginLeft: 20,color:"grey"}}>All components share between all screens</i></td>
          </tr>
          <tr><td>┣📜README.md
            <i style={{marginLeft: 20,color:"grey"}}>All components share between all screens</i></td>
          </tr>
          <tr><td> ┣ 📂home <i style={{marginLeft: 20,color:"grey"}}>Components in Home screen</i></td></tr>
          <tr><td> ┣ 📂restaurantDetail <i style={{marginLeft: 20,color:"grey"}}>Components in Restaurant details screen</i></td></tr>
           
          </tbody>
          </table> */}
        </Card>

 

 
        </div>

        
        
      </div>
    </div>
  );
};

export default Home;

 
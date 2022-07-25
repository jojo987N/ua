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
import {Card, Divider} from 'antd'

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
          
           
        {/* <Card title={"Folder Structure"} style={{margin: 20}}> */}
        <Card style={{margin: 20}}>

        <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider  />
         
        <table >
<tbody>
 
<tr><td>📦uber-eats-clone</td></tr>
<tr><td> ┣ 📂assets</td>
<td><i style={{marginLeft: 20,color:"grey"}}>Any file that the app need at runtime, contain all static image files, icons, animations, fonts </i></td></tr>

<tr><td> ┣ 📂components</td>
<td><i style={{marginLeft: 20,color:"grey"}}>Contain all components shared between screens, all applications, reusable and UI components </i></td></tr>
<tr><td> ┣ 📂contexts</td>
<td><i style={{marginLeft: 20,color:"grey"}}>Context is designed to share data that can be considered global to a component tree </i></td></tr>
<tr><td> ┣ 📂navigation</td>
<td><i style={{marginLeft: 20,color:"grey"}}>Contain all stack navigators, to manage the navigation history and presentation of appropriate screen  </i></td></tr>
<tr><td> ┣ 📂node_modules</td>
<td><i style={{marginLeft: 20,color:"grey"}}>Directory created by npm and a way of tracking each installed packages. A cache for the external modules  </i></td></tr>
<tr><td> ┣ 📂redux</td>
<td><i style={{marginLeft: 20,color:"grey"}}>Contain reducers, actions , state container, a store to store the state of the variables  </i></td></tr>
<tr><td> ┣ 📂screens</td>
<td><i style={{marginLeft: 20,color:"grey"}}>contain all screens of app, components can be handled by some navigator  </i></td></tr>
<tr><td> ┣ 📜.gitignore</td>
<td><i style={{marginLeft: 20,color:"grey"}}>Specifies untracked files that git should ignore. Files already tracked by git are not affected </i></td></tr>
<tr><td> ┣ 📜App.js</td>
<td><i style={{marginLeft: 20,color:"grey"}}>Main component, which acts as a container for all other components . </i></td></tr>
<tr><td> ┣ 📜README.md</td>
<td><i style={{marginLeft: 20,color:"grey"}}>Contain information that is commonly required to understand what the project is about</i></td></tr>
<tr><td> ┣ 📜babel.config.js</td>
<td><i style={{marginLeft: 20,color:"grey"}}>Run plugins on a subset of files, convert syntax into code that can be run in javascript environment</i></td></tr>
<tr><td> ┣ 📜data.js</td>
<td><i style={{marginLeft: 20,color:"grey"}}>Contain some data use by many components in all app </i></td></tr>
<tr><td> ┣ 📜firebase.js</td>
<td><i style={{marginLeft: 20,color:"grey"}}>Contain firebase configuration, functions, interactions with database, all firebase services</i></td></tr>
<tr><td> ┣ 📜global.js</td>
<td><i style={{marginLeft: 20,color:"grey"}}>Contain all variables used in app globally, constant, currency, global style, api keys, language ... </i></td></tr>
<tr><td> ┣ 📜package.json</td>
<td><i style={{marginLeft: 20,color:"grey"}}>Manifest file for app, metadata associated with project + all dependencies with version + scripts</i></td></tr>
<tr><td> ┣ 📜utils.js</td>
<td><i style={{marginLeft: 20,color:"grey"}}>Contain all util functions , geolocation, distance between points, generate uid ...   </i></td></tr>
<tr><td> ┗ 📜yarn.lock</td>
<td><i style={{marginLeft: 20,color:"grey"}}>Manage and list the versions of dependencies that are used at the time of the installation process</i></td></tr>
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

 
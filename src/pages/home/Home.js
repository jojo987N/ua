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
// import SyntaxHighlighter from 'react-syntax-highlighter';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import myImage from '../../assets/images/capture-comment.png'

 



const Home = () => {

  const {currentRestaurant} = useContext(RestaurantContext)
  const codeString = 'npm -v';

 // console.log(currentRestaurant)

  return (
    
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        {/* <Navbar1 /> */}
         
        <div className="folders">
          
           
           <Card title={"Customer App"}>  
          <Card title={"Folder Structure"} style={{ margin: 20 }}>
            <FolderStructure />
          </Card>

        <Card >
         
        <h1>Setting up the development environment</h1>

        <hr />

<p>This page will help you install and build your first React Native app.</p>

<p><strong>If you are new to mobile development</strong>, the easiest way to get started is with Expo CLI. Expo is a set of tools built around React Native and, while it has many&nbsp;<a href="https://expo.io/features" rel="noopener noreferrer" target="_blank">features</a>, the most relevant feature for us right now is that it can get you writing a React Native app within minutes. You will only need a recent version of Node.js and a phone or emulator. If you&#39;d like to try out React Native directly in your web browser before installing any tools, you can try out&nbsp;<a href="https://snack.expo.dev/" rel="noopener noreferrer" target="_blank">Snack</a>.</p>


<p>&nbsp;</p>

<p><strong><span style={{fontSize: 22}}>How to Install Node.js and NPM on Windows</span></strong></p>

<h3><strong>Step 1: Download Node.js Installer</strong></h3>

<p>In a web browser, navigate to&nbsp;<a href="https://nodejs.org/en/download/" rel="noreferrer noopener" target="_blank">https://nodejs.org/en/download/</a>. Click the&nbsp;<strong>Windows Installer</strong>&nbsp;button to download the latest default version. At the time this article was written, version 16.16.0-x64 was the latest version. The Node.js installer includes the NPM package manager.</p>

<p>&nbsp;</p>
<img  src={require("../../assets/images/capture-comment.png")} style={{width: 700, height: 400}} alt="avatar" />

<p>&nbsp;</p>

<p>Installing Node.js on macOS follows almost the same procedure as on Windows. All you have to do is download the installer file for Mac. Then, as soon as you start it, the installer will guide you through the rest</p>

<h4><strong><span style={{fontSize: 18}}>STEP 2 - Install the Expo CLI</span></strong></h4>

<p>We&#39;ll install Expo CLI with npm, npm comes along with Node, you can confirm this by running the following command.</p>

 

 

<SyntaxHighlighter language="javascript" style={a11yDark}>
      {codeString}
    </SyntaxHighlighter>
    <p>&nbsp;</p>
    <p>it will print the version of npm installed in your machine.</p>

<p>Now, we install Expo CLI by running the following command:</p>

<SyntaxHighlighter language="javascript" style={a11yDark}>
npm install -g expo-cli

    </SyntaxHighlighter>
<p>&nbsp;</p>
<p>When you download after you need to install all package in&nbsp;<code>package.json</code></p>
<p>Navigate to the downloaded Good Food folder using terminal and run</p>
<SyntaxHighlighter language="javascript" style={a11yDark}>
npm install 

    </SyntaxHighlighter>
    
<p>&nbsp;</p>
<p>Now the project is all set to go. Navigate into the newly created folder and type in the npm start.</p>

<SyntaxHighlighter language="javascript" style={a11yDark}>
npm start 

    </SyntaxHighlighter>

    <p> npm start will now start up the Expo development to the Expo Dev Tools and a new tab should open in your browser.</p>

<p>&nbsp;</p>

<h2><strong><span style={{fontSize: 24}}>Create a Firebase Project</span></strong></h2>

<p>Head over to&nbsp;<a href="https://firebase.google.com/" rel="noopener">Firebase.com</a>&nbsp;and create a new account. Once logged in, you&rsquo;ll be able to create a new project in the&nbsp;<a href="https://console.firebase.google.com/u/0/" rel="noopener">Firebase Console</a>.</p>

<ul>
	<li>Create a new account on&nbsp;<a href="https://firebase.google.com/" rel="noopener">Firebase.com</a></li>
	<li>Create a new project in&nbsp;<a href="https://console.firebase.google.com/" rel="noopener">Firebase Console</a></li>
	<li>Enable Email &amp; Password auth method in&nbsp;<em>Firebase Console</em>&nbsp;-&gt;&nbsp;<em>Authentication</em>&nbsp;-&gt;&nbsp;<em>Sign-in method</em></li>
</ul>

<p>&nbsp;</p>

<img  src={require("../../assets/images/capture-firebase.png")}  alt="avatar" />

<p>&nbsp;</p>
<h2>Create a Firebase config file</h2>

<h3>Add your firebase configuration into firebase/config file:</h3>
<p></p>
<p><img  src={require("../../assets/images/firebaseConfig.png")}  alt="avatar" /></p>

<h3>You can get all this information from&nbsp;<a href="https://console.firebase.google.com/" rel="noopener">Firebase Console</a>&nbsp;-&gt; Project Settings</h3>

<p>&nbsp;</p>
<img  src={require("../../assets/images/findFirebaseConfig.png")}  alt="avatar" />

<p>&nbsp;</p>
<h2><strong>Get Google Places API key</strong></h2>
<p>In order to implement autocomplete functionality, we need to get an API for Google Places API.</p>
<h3>Go to Google Cloud Platform</h3>
<p>Visit&nbsp;<a href="https://console.cloud.google.com/google/maps-apis/" rel="noopener ugc nofollow" target="_blank">Google Cloud Platform console</a>&nbsp;to get an API key to use &ldquo;Google Maps Javascript API&rdquo;.</p>

<h3>Create a project and enable the API</h3>
<p>First, create a new project on the console and navigate to &ldquo;<strong>APIs and Services</strong>&rdquo; on the left drawer navigation. Then, click on &ldquo;<strong>ENABLE APIs AND SERVICES</strong>&rdquo; on the dashboard.</p>
<img  src={require("../../assets/images/capture-console.png")}  style={{width: 500, height: 250}} alt="avatar" />

<p>&nbsp;</p>
<p>On the next screen, search for &ldquo;<strong>Places API</strong>&rdquo; and enable it.</p>
<img  src={require("../../assets/images/capture-console1.png")}  style={{width: 500, height: 250}} alt="avatar" />

<h3>Generate an API key</h3>
<p>After enabling the API, you need to create a key to actually use the API. navigate to &ldquo;<strong>Credentials</strong>&rdquo; under &ldquo;<strong>APIs &amp; Services</strong>&rdquo;, and click on &ldquo;<strong>CREATE CREDENTIALS</strong>&rdquo; in the upper middle of the screen and choose &ldquo;API key&rdquo;.</p>
<img  src={require("../../assets/images/capture-console2.png")}  style={{width: 500, height: 250}} alt="avatar" />
<p></p>
<p>This will generate an API key, so keep it somewhere safe because you need it later to use the API in the app.</p>
<h3>Create a billing account and link it to the project</h3>
<p>In order to get results from the API, your Google Cloud project need to have a billing account linked to your project. You can create a billing account and link it to your project on the&nbsp;<strong>&ldquo;Billing&rdquo;&nbsp;</strong>page.</p>
<p>&nbsp;</p>
<h1><strong>Change app name</strong></h1>
<p>It's very easy to change app name, open app.json file in root project folder . </p>
<img  src={require("../../assets/images/changeName.png")}  alt="avatar" />
<p>&nbsp;</p>
<h1><strong>Change app logo</strong></h1>
<p>It's very easy to change app logo, open assets folder in root project folder . </p>
<img  src={require("../../assets/images/add_logo.png")}  alt="avatar" />
<p>&nbsp;</p>
<h1><strong>Change app currency</strong></h1>
<p>It's very easy to change app currency, open assets folder in root project folder . </p>
<img  src={require("../../assets/images/add_currency.png")}  alt="avatar" />
<p>&nbsp;</p>
<h1><strong>Translation</strong></h1>
<p>It's very easy to customizing the experience for specific regions, languages, or cultures. It also provides access to the locale data on the native device.</p>
<img  src={require("../../assets/images/translation-doc.gif")} style={{width:500, height: 220}} alt="avatar" />
<p>In en.json file, inside of lang folder, you can translate for your specific language</p>
<img  src={require("../../assets/images/vscode-translation-annotation-1.png")}  alt="avatar" />
<p>&nbsp;</p>
<h1><strong>Screens</strong></h1>

<table border="1">
<tbody>
<tr><td>📦screens</td></tr>
<tr><td> ┣ 📜Account Screen</td></tr>
<tr><td> ┣ 📜Add Card</td></tr>
<tr><td> ┣ 📜Cart Screen</td></tr>
<tr><td> ┣ 📜Home</td></tr>
<tr><td> ┣ 📜Loader</td></tr>
<tr><td> ┣ 📜Menus Detail Screen</td></tr>
<tr><td> ┣ 📜Orders Screen</td></tr>
<tr><td> ┣ 📜Offers</td></tr>
<tr><td> ┣ 📜Onboarding</td></tr>
<tr><td> ┣ 📜Order Completed</td></tr>
<tr><td> ┣ 📜Order Details</td></tr>
<tr><td> ┣ 📜Order Request</td></tr>
<tr><td> ┣ 📜Orders History Screen</td></tr>
<tr><td> ┣ 📜Restaurant Detail</td></tr>
<tr><td> ┣ 📜Restaurants Map Screen</td></tr>
<tr><td> ┣ 📜Search Results</td></tr>
<tr><td> ┣ 📜Search Screen</td></tr>
<tr><td> ┣ 📜Sign In</td></tr>
<tr><td> ┣ 📜Sign Up</td></tr>
<tr><td> ┣ 📜Splash</td></tr>
<tr><td> ┗ 📜Wallet</td></tr>
</tbody>
</table>
<p>&nbsp;</p>
<h2><strong>Home Screen</strong></h2>

<img  src={require("../../assets/images/home-annotate1.png")}  alt="avatar" />

<h3><strong>Search Component</strong></h3>
<p>You can easily change autocomplete language </p>


<img  src={require("../../assets/images/google-autocomplete.png")}  alt="avatar" />

<p>&nbsp;</p>

<h3><strong>Categories Component</strong></h3>
<p></p>
<p>You can easily add category , set image, name, description in restaurant app </p>
<img  src={require("../../assets/images/addCategory.gif")} style={{width: 800, height: 450}}  alt="avatar" />

<p>&nbsp;</p>

<h3><strong>Restaurants Items Component</strong></h3>
<p></p>
<p>You can easily add restaurant, set image, name, description, address in admin dashboard </p>
<img  src={require("../../assets/images/Capture-addRestaurant.png")} style={{width: 800, height: 393}}  alt="avatar" />
<p>&nbsp;</p>
<h2><strong>Restaurant Details Screen</strong></h2>
<p></p>
<img  src={require("../../assets/images/menuItems.png")} alt="avatar" />

<p>&nbsp;</p>

<h3><strong>Menu Items Component</strong></h3>
<p></p>
<p>You can easily add menu , set image, name, description, price in restaurant app </p>
<img  src={require("../../assets/images/addFood.gif")} style={{width: 800, height: 450}} alt="avatar" />

<p>&nbsp;</p>

<h1 id="nass"><strong>Driver App Translation</strong></h1>
<p>It's very easy to customizing the experience for specific regions, languages, or cultures. It also provides access to the locale data on the native device.</p>
<p>In en.json file, inside of lang folder, you can translate for your specific language</p>
<img  src={require("../../assets/images/driver-translation.png")}  alt="avatar" />
<p>&nbsp;</p>
<p>&nbsp;</p>
<h1><strong>Customize Colors</strong></h1>
<p>It's very easy to change colors , open global.js file in project folder . </p>
<img  src={require("../../assets/images/customize-colors.png")}  alt="avatar" />
<p>&nbsp;</p>
<p>&nbsp;</p>
<h1><strong>Add New Driver</strong></h1>
<p>Add driver in Admin Panel . </p>
<img  src={require("../../assets/images/add-driver.png")} style={{width: 900, height: 442}} alt="avatar" />
<p>&nbsp;</p>
<p>&nbsp;</p>
<h1><strong>Customize Icons</strong></h1>
<p>It's very easy to customize icons , open global.js file in project folder . </p>
<img  src={require("../../assets/images/customize-icons.png")}  alt="avatar" />
<p>&nbsp;</p>
<h2><strong>Restaurants Map Screen</strong></h2>

<h3><strong>Restaurants sliding Component</strong></h3>
<p>You can easily change radius around locations </p>

<img  src={require("../../assets/images/restaurants-radius.png")}  alt="avatar" />
<p>&nbsp;</p>
<h2><strong>Carts Screen</strong></h2>

<img  src={require("../../assets/images/carts-screen.png")}  alt="avatar" />
<p>&nbsp;</p>


<p>&nbsp;</p>

<h1><strong>Driver Notification Time</strong></h1>
<p>It's very easy to customizing the driver app, notification when receive order</p>
<img  src={require("../../assets/images/notification-time.gif")}  alt="avatar" />
<p>&nbsp;</p>
<p>&nbsp;</p>


        </Card>

        </Card>

         

 

 
        </div>

        
        
      </div>
    </div>
  );
};

export default Home;

const FolderStructure = () => {
  return (
    <table >
    <tbody>
     
    <tr><td>📦<strong>good-food</strong></td></tr>
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
    <tr><td> ┣ 📂lang</td>
    <td><i style={{marginLeft: 20,color:"grey"}}>Translations for your specific language, regions</i></td></tr>
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
  )
}

 
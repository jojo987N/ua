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
         
        <div className="folders">
          
           
            
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
  )
}

 
import React from 'react';
import { Spinner } from 'react-bootstrap';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../src/Home.css";
import GroupExample from './card';
import Bar from './components/bar/bar';
import pic1 from "../src/images/HelpAge-India.jpeg";
import pic2 from "../src/images/images.jpeg";
import pic3 from "../src/images/images1.jpeg";
import pic4 from "../src/images/main-thumb-991573691-200-tplssmzhrrazqjhxetpqpltzxzzxrcpy.jpeg";
import pic5 from "../src/images/main-qimg-a161ecdfde2d99e9518cfe3dad985140.jpeg";
import pic6 from "../src/images/HelpAge-India.jpeg";
import PrimarySearchAppBar from './components/bar/bar2';
import OffcanvasExample from './components/bar/bar2';
import CollapsibleExample from './components/bar/bar2';
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>


function Home() {
  return (
    <div>
    {/* <Bar class1="fs-4 p-4 text-light" class2="fs-4 p-4 " class3="fs-4 p-4 " class4="fs-4 p-4 "/>     */}
   <CollapsibleExample/>
  <div><br/>
    <h1 style={{textAlign:"center"}}>News And Events</h1>
  <GroupExample 
  img1={pic1} img2={pic2} img3={pic5}
  Title1="Help-Age india" Title2="Youth building youth" Title3="Apne log"
  />
    <GroupExample
     img1={pic3} img2={pic4} img3={pic6}
     />
    <GroupExample/>   
  </div>

    <Spinner/>
        </div>
    
  )
}

export default Home;
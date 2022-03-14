import React from "react";
import reactDom from "react-dom";
import Header from "./components/Header";
//import images from "./images";
import Image1 from "./img/IMG_20220109_084115_108.jpg";
import Image2 from "./img/lucks.jpg";
import Card from "./components/Card";
import Image3 from "./img/longs1.jpg";
import Avata from "./components/Avata";
// mport Carid from "./components/Card.css";

function App() {
  return (
    <div>
      {/* <Header title="Logo" />
      <h1>My contacts</h1> */}
      <h1 className="heading">My Contacts</h1>
      <Avata img={Image2} />
      <Card
        name="Victor"
        img={Image1}
        tel="090434343434"
        email="victo@gmail.com"
      />
      <Card
        name="Pay-moon boss"
        img={Image3}
        email="longs@gmail.com"
        tel="08082858429"
      />

      {/* <h2>Done</h2>
      <img src={Image3} style={{ width: 50, height: 50 }} />
      <p>08082858429</p>
      <p>jonne@gmail.com</p>

      <h2>Done</h2>
      <img src={Image1} style={{ width: 50, height: 50 }} />
      <p>08082858429</p>
      <p>jonne@gmail.com</p> */}
    </div>
  );
}
export default App;

import React from "react";
import "./Home.css"



function Home() {
    return (
        <>
        <nav className="transparent z-depth-0">
        <div className="nav-wrapper ">
          <a href="/" className="brand-logo black-text text-darken-2">Pomotato</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down black-text text-darken-2">
            <li><a  className="black-text text-darken-2"href="/">About</a></li>
            <li><a className=".btn transparent z-depth-0 black-text text-darken-2"href="/">Log Out </a></li>
          </ul>
        </div>
      </nav>
       {/* <ul class="sidenav" id="mobile-demo">
       <li><a href="sass.html">Sass</a></li>
       <li><a href="badges.html">Components</a></li>
       <li><a href="collapsible.html">Javascript</a></li>
       <li><a href="mobile.html">Mobile</a></li>
     </ul> */}
     <div className="container"></div>
     <h1 className="tl-heading">Today's List</h1>
      <div className=" today-buttons">
        <button
          type="button"
          className="btn yellow-btn  btn-group list-buttons "
        >
          Practice a yoga pose
        </button>
        <button
          type="button"
          className="btn  coral-btn btn-group list-buttons "
        >
          Start prepping for dinner
        </button>
        <button
          type="button"
          className="btn green-btn btn-group list-buttons"
        >
          Organize an area of your closet
        </button>
      </div>
     </>
    )
}








export default Home;

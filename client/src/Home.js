import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <nav className="transparent z-depth-0">
        <div className="nav-wrapper ">
          <a href="/" className="brand-logo black-text text-darken-2">
            Pomotato
          </a>
          <ul
            id="nav-mobile"
            className="right hide-on-med-and-down black-text text-darken-2"
          >
            <li>
              <a className="black-text text-darken-2" href="/">
                About
              </a>
            </li>
            <li>
              <a
                className=".btn transparent z-depth-0 black-text text-darken-2"
                href="/"
              >
                Log Out{" "}
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* <ul class="sidenav" id="mobile-demo">
       <li><a href="sass.html">Sass</a></li>
       <li><a href="badges.html">Components</a></li>
       <li><a href="collapsible.html">Javascript</a></li>
       <li><a href="mobile.html">Mobile</a></li>
     </ul> */}
      <div className="container">
        <h1 className="tl-heading">Today's List</h1>
        <div className=" today-buttons">
          <button
            type="button"
            className="btn yellow-btn black-text btn-group list-buttons "
          >
            Practice a yoga pose
          </button>
          <button
            type="button"
            className="btn  coral-btn black-text btn-group list-buttons "
          >
            Start prepping for dinner
          </button>
          <button
            type="button"
            className="btn green-btn black-text btn-group list-buttons"
          >
            Organize an area of your closet
          </button>
        </div>
        <div class="categories">
          {/* <!-- category tabs --> */}
          <div id="defaultOpen" class="tabcontentTwo">
            <div class="activity-tab scrolling-categories">
              <div class="tab">
                <button
                  type="button"
                  class="tablinks btn btn-outline-dark"
                  onclick="activityTabs(event, 'Relax')"
                >
                  <img src="./assets/images/relax.svg" />
                  Relax & De-Stress
                </button>
                <button
                  type="button"
                  class="tablinks btn btn-outline-dark"
                  onclick="activityTabs(event, 'Inspired')"
                >
                  <img src="./assets/images/inspire.svg" />
                  Get Inspired
                </button>
                <button
                  type="button"
                  class="tablinks btn btn-outline-dark"
                  onclick="activityTabs(event, 'Energy')"
                >
                  <img src="./assets/images/boost.svg" />
                  Boost Energy
                </button>
                <button
                  type="button"
                  class="tablinks btn btn-outline-dark"
                  onclick="activityTabs(event, 'Productive')"
                >
                  <img src="./assets/images/productive.svg" />
                  Feel Productive
                </button>
              </div>
              <div class="tab ">
                <button
                  type="button"
                  class="tablinks btn btn-outline-dark"
                  onclick="activityTabs(event, 'Cleaning')"
                >
                  <img src="./assets/images/cleaning.svg" />
                  Cleaning
                </button>
                <button
                  type="button"
                  class="tablinks btn btn-outline-dark"
                  onclick="activityTabs(event, 'Body')"
                >
                  <img src="./assets/images/body.svg" />
                  Body
                </button>
                <button
                  type="button"
                  class="tablinks btn btn-outline-dark"
                  onclick="activityTabs(event, 'Creative')"
                >
                  <img src="./assets/images/creative.svg" />
                  Creative
                </button>
                <button
                  type="button"
                  class="tablinks btn btn-outline-dark"
                  onclick="activityTabs(event, 'SelfCare')"
                >
                  <img src="./assets/images/selfcare.svg" />
                  Self-Care
                </button>
                <button
                  type="button"
                  class="tablinks btn btn-outline-dark"
                  onclick="activityTabs(event, 'Mind')"
                >
                  <img src="./assets/images/mind.svg" />
                  Mind
                </button>
                <button
                  type="button"
                  class="tablinks btn btn-outline-dark"
                  onclick="activityTabs(event, 'Food')"
                >
                  <img src="./assets/images/food.svg" />
                  Food
                </button>
                <button
                  type="button"
                  class="tablinks btn btn-outline-dark"
                  onclick="activityTabs(event, 'Social')"
                >
                  <img src="./assets/images/social.svg" />
                  Social
                </button>
                <button
                  type="button"
                  class="tablinks btn btn-outline-dark"
                  onclick="activityTabs(event, 'Media')"
                >
                  <img src="./assets/images/media.svg" />
                  Media
                </button>
                <button
                  type="button"
                  class="tablinks btn btn-outline-dark"
                  onclick="activityTabs(event, 'FavoritesTwo')"
                >
                  <img src="./assets/images/fav.svg" />
                  Favorites
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="today-buttons">
          <button
            type="button"
            className="btn yellow-btn black-text btn-group list-buttons "
          >
            Practice a yoga pose
          </button>
          <button
            type="button"
            className="btn  coral-btn black-text btn-group list-buttons "
          >
            Start prepping for dinner
          </button>
          <button
            type="button"
            className="btn green-btn black-text btn-group list-buttons"
          >
            Organize an area of your closet
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;

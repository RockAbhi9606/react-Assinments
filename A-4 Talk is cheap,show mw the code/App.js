import React from 'react';
import ReactDOM from 'react-dom/client'
import logo from './images/quickbite-high-resolution-logo-transparent.png'
import './index.css'
import { restaurantsListData } from './restaurantsListData';

const Header = () => {
  return (
    <div className="header">
      <div className="left-side">
        <img className='logo' src={logo} alt="logo" />
        <span className="title">QuickBite</span>
        <div role="button" className="select-city-container">
          <span className="select-city">Other</span>
          <span className="location-city">pune, Maharashtra, India</span>
          <span className="dropdown-arrow"><i class="fa-solid fa-angle-down"></i></span>
        </div>
      </div>
      <div className="right-side">
        <span><i className="fa-solid fa-house"></i>&nbsp;&nbsp;Home</span>
        <span><i className="fa-solid fa-address-card"></i>&nbsp;&nbsp;About Us</span>
        <span><i className="fa-solid fa-phone"></i>&nbsp;&nbsp;Contact Us</span>
        <span title="Cart"><i className="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp;Cart</span>
      </div>
    </div>
  )
}

const CardComponent = (props) => {
  console.log(props.restaurantsListData.info)
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } = props.restaurantsListData.info;
  return (
    <div className="restrorent-card">
      <div className="badge">
        {sla.lastMileTravelString}
      </div>
      <img className='food-image' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="food-images" />
      <div className="card-inner-info">
        <h2>{name}</h2>
        <p>{cuisines.join(", ")}</p>
        <div className="rating-km">
          <p className={`rating ${avgRating >= 4
            ? ''
            : avgRating >= 3
              ? 'good-rating'
              : 'poor-rating'}`}>
            <i className="fa-solid fa-star"></i> {avgRating}
          </p>
          <i className="fa-solid fa-circle"></i>
          <p>{sla.deliveryTime} MINS</p>
          <i className="fa-solid fa-circle"></i>
          <p>{costForTwo}</p>
        </div>
      </div>
    </div >
  )
}

const SearchComponent = () => {
  return (
    <div className="seach-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input type="text" name="search" id="search-input" placeholder='Search for restaurants and food' />
    </div>
  )
}

const CardContainer = () => {
  return (
    <div className="main-container">
      <SearchComponent />
      <div className="location">
        Top Restrorents in <span>Pune</span>&nbsp;
        <span><i class="fa-solid fa-city"></i></span>
      </div>
      <hr />
      <div className="card-container">
        {
          restaurantsListData.map((restaurant) => {
            return <CardComponent key={restaurant.info.id} restaurantsListData={restaurant} />
          })
        }
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <CardContainer />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);





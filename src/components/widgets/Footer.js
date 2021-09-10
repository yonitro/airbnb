import React,{useContext} from 'react'
import { Link, useCurrentRoute } from 'react-navi'
import { GlobalContext } from "../../context/GlobalContext";

export default function Footer() {
    const { searchApp } = useContext(GlobalContext);
    const [search, setsearch] = searchApp;
  
  return (
    <div className="footer">
      <div className="footsection">
        <div className="footTitle">About</div>
        <ul>
          <li><a>How Airbnb works</a></li>
          <li><a>Newsroom</a></li>
          <li><a>Airbnb 2021</a></li>
          <li><a>Investors</a></li>
          <li><a>Airbnb Plus</a></li>
          <li><a>Airbnb Luxe</a></li>
          <li><a>HotelTonight</a></li>
          <li><a>Airbnb for Work</a></li>

        </ul>
      </div>
      <div className="footsection">
      <div className="footTitle">COMMUNITY</div>
      <ul>
          <li><a>How Airbnb works</a></li>
          <li><a>Newsroom</a></li>
          <li><a>Airbnb 2021</a></li>
          <li><a>Investors</a></li>
          <li><a>Airbnb Plus</a></li>
          <li><a>Airbnb Luxe</a></li>
          <li><a>HotelTonight</a></li>
          <li><a>Airbnb for Work</a></li>

        </ul>
      </div>
      <div className="footsection">
      <div className="footTitle">HOST</div>
      <ul>
          <li><a>How Airbnb works</a></li>
          <li><a>Newsroom</a></li>
          <li><a>Airbnb 2021</a></li>
          <li><a>Investors</a></li>
          <li><a>Airbnb Plus</a></li>
          <li><a>Airbnb Luxe</a></li>
          <li><a>HotelTonight</a></li>
          <li><a>Airbnb for Work</a></li>

        </ul>
      </div>
      <div className="footsection">
      <div className="footTitle">SUPPORT</div>
      <ul>
          <li><a>How Airbnb works</a></li>
          <li><a>Newsroom</a></li>
          <li><a>Airbnb 2021</a></li>
          <li><a>Investors</a></li>
          <li><a>Airbnb Plus</a></li>
          <li><a>Airbnb Luxe</a></li>
          <li><a>HotelTonight</a></li>
          <li><a>Airbnb for Work</a></li>

        </ul>
      </div>
    </div>
  )
}

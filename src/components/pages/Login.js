import React,{useContext} from 'react'
import { Link, useCurrentRoute } from 'react-navi'
import { GlobalContext } from "../../context/GlobalContext";

export default function Landing() {
    const { searchApp } = useContext(GlobalContext);
    const [search, setsearch] = searchApp;
  
  return (
    <div className="login">
     You Need To Login/Signup to view this content. Login component coming soon.......
    </div>
  )
}

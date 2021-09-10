import React,{useContext} from 'react'
import { Link, useCurrentRoute } from 'react-navi'
import { GlobalContext } from "../../context/GlobalContext";

export default function Footer() {
    const { searchApp } = useContext(GlobalContext);
    const [search, setsearch] = searchApp;
  
  return (
    <div>
      Footer area
    </div>
  )
}

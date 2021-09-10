

import React, { useContext, useEffect } from "react";
import { Link, useCurrentRoute } from "react-navi";
import ServicesApi from "../../api/services";
import { GlobalContext } from "../../context/GlobalContext";

import axios from 'axios'

export default function Services() {
  console.log(ServicesApi)
  const { searchApp } = useContext(GlobalContext);
  const [search, setsearch] = searchApp;


  



useEffect(()=>{
  const fetchData = async () => {
    const formData = {"prop":"myprop"}
   console.log("==================================")
    //const { data } = (await ServicesApi.postData) < [] > ("yourpath", formData);
    const { data } = await ServicesApi.getData("/products/categories");
    return data;
  };

  fetchData()
    .catch((e) => {
        console.log("error")
    })
    .then((data) => {
      console.log("success!--")
        console.log(data)
      if (data != undefined) {
        //do something
      } else {
        //do something else
      }
    });
},[])

  return <div>Services work like this.</div>;
}

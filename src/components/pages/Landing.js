import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useCurrentRoute } from "react-navi";
import Card from "../widgets/Card";
import { GlobalContext } from "../../context/GlobalContext";

import ServicesApi from "../../api/services";
export default function Landing() {
  const { findCatogary, findCatogaryName } = useContext(GlobalContext);
  const [currentCatogary, setCurrentCatogary] = findCatogary;
  const [catogaryName, setCatogaryName] = findCatogaryName;
  useEffect(() => {
    const fetchData = async () => {
      console.log("==================================");
      //const { data } = (await ServicesApi.postData) < [] > ("yourpath", formData);
      const { data } = await ServicesApi.getData("/products/category/"+catogaryName);
      return data;
    };

    fetchData()
      .catch((e) => {
        console.log("error");
      })
      .then((data) => {
        console.log("success!--");
        console.log(data);
        setCurrentCatogary(data);
        if (data != undefined) {
          //do something
        } else {
          //do something else
        }
      });
  }, []);
  return (
    <div className="widgetsHolder">      
      {currentCatogary.map((item, i) => {
        return <Card image={item.image} title={item.title} price={item.price}/>;
      })}
    </div>
  );
}

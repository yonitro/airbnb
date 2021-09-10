import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useCurrentRoute } from "react-navi";
import { GlobalContext } from "../../context/GlobalContext";
import $ from "jquery";
import ServicesApi from "../../api/services";
export default function Catogary() {
  const { findCatogaryName, findCatogary } = useContext(GlobalContext);

  const [catogary, setCatogary] = useState([]);
  const [currentCatogary, setCurrentCatogary] = findCatogary;
  const [catogaryName, setCatogaryName] = findCatogaryName;

  const setBar = (_id) => {};

  const setActive = (e) => {
    let _id = e.target.id;
    $("a").removeClass("active");
    $("#" + _id).addClass("active");
    let elWidth = $(".active").outerWidth();
    $(".activeBar").css("width", elWidth + "px");
    let elLeft = $(".active").offset().left;
    $(".activeBar").css("left", elLeft + "px");
    setCatogaryName($("#" + _id).text())
    const fetchData = async () => {
      console.log("==================================");
      //const { data } = (await ServicesApi.postData) < [] > ("yourpath", formData);
      const { data } = await ServicesApi.getData("/products/category/"+$("#" + _id).text());
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
  };

  useEffect(() => {
    const fetchData = async () => {
      const formData = { prop: "myprop" };
      console.log("==================================");
      //const { data } = (await ServicesApi.postData) < [] > ("yourpath", formData);
      const { data } = await ServicesApi.getData("/products/categories");
      return data;
    };

    fetchData()
      .catch((e) => {
        console.log("error");
      })
      .then((data) => {
        console.log("success!--");
        console.log(data);
        setCatogary(data);
        
        if (data != undefined) {
          //do something
        } else {
          //do something else
        }
      });
  }, []);

  return (
    <div className="catogary">
      <ul>
        {catogary.map((item, i) => {
          return (
            <li key={i}>
              <a
                id={`btn_${i}`}
                href="/#"
                className={i < 1 ? "active" : ""}
                onClick={(e) => {
                  setActive(e);
                }}
              >
                <img
                  src="https://a0.muscache.com/pictures/ac09b78a-19c0-46fc-b604-fc90a8912864.jpg"
                  alt=""
                />
                {item}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="activeBar"></div>
    </div>
  );
}

import React, { useState } from "react";
import Arrow from "./arrow.component";
import _ from "lodash";
import { useRouter } from "next/router";

function Credit({ cast, crew }) {
  let count = 0;
  const router = useRouter();
  const [show, setShow] = useState(false);
  console.log("crew", crew);
  // const collapse= document.getElementsByClassName("credit")
  const fun = () => {
    // let btn = document.getElementsByClassName(".toggle-btn");
    let l = document.getElementsByClassName(".list-row");
      if (l.style.display === "none") {
        l.style.display = "block";
      } else l.style.display === "block";
      {
        l.style.display = "none";
      }
    
  };

  const getOccurance = (arr, ele) => {
    return arr.filter((item) => item === ele).length;
  };
  const listOfMember = (arr, ele) => {
    return arr.filter((item) => item.department === ele);
  };

  const depart = crew.map((item) => {
    return item.department;
  });

  const departmentList = _.intersection(depart);

  return (
    <>
      <div className="credit-wrapper">
        {/* <div className="credit">Cast ({cast.length})</div> */}
        {departmentList.map((i) => {
          count = getOccurance(depart, i);
          let nameOfMember = listOfMember(crew, i);
          console.log("name", nameOfMember);
          return (
            <>
              <div className="credit">
                <div
                  className="credit-name"
                  // onClick={() => {
                  //   show ? setShow(false) : setShow(true);
                  // }}
                >
                  <h3 style={{ color: "#e3b376" }}>
                    {i} ({count} credits)
                  </h3>
                  {/* {show ? ( */}
                  {nameOfMember.map((item) => {
                    return (
                      <div className="list">
                        <div className="list-row">
                          <div>
                            <h4
                              onClick={() => {
                                router.push({
                                  pathname: `/people/${item.id}`,
                                  query: { id: item.id, name: item.name },
                                });
                              }}
                            >
                              {item.name}
                            </h4>
                          </div>
                          <div>.....</div>
                          <div>
                            {" "}
                            <h4>{item.job}</h4>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="down-arrow">
                  <Arrow className="toggle-btn" onClick={()=>{
                    fun()
                  }}/>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Credit;

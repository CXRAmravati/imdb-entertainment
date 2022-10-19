import React, { useState } from "react";
import Arrow from "./arrow.component";
import _ from "lodash";

function Credit({ cast, crew }) {
  let count = 0;
  const [show, setShow] = useState(false);
  // const collapse= document.getElementsByClassName("credit")

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
          return (
            <>
              <div className="credit">
                <div
                  className="credit-name"
                  // onClick={() => {
                  //   show ? setShow(false) : setShow(true);
                  // }}
                >
                  {i} ({count} credits)
                  {/* {show ? ( */}
                  {nameOfMember.map((item) => {
                    return (
                      <div className="list">
                        <div>{item.name}</div>
                        <div>.....</div> 
                        <div> {item.job}</div>
                      </div>
                    );
                  })}
                </div>
                <div className="down-arrow">
                  <Arrow onClick={() => console.log("hello")} />
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

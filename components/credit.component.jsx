import React from "react";
import Arrow from "./arrow.component";
import _ from "lodash";

function Credit({ cast, crew }) {
  console.log("asa", cast);
  console.log("crew", crew);
  const depart=crew.map((item)=>{
    return item.department
  })
  const departmentList =_.intersection(depart);
  console.log("deeee",depart)
  return (
    <>
      <div className="credit-wrapper">
        <div className="credit">Cast ({cast.length})</div>
        {departmentList.map((i)=>{
          console.log("i",i)
          return(<>
          <div className="credit">
              <div className="credit-name">{i}</div>
              <div className="down-arrow">
                <Arrow />
              </div>
            </div>
          </>)
        })}
        {/* {crew.map((item) => {
          return (
            <>
            <div className="credit">
              <div className="credit-name">{item}</div>
              <div className="down-arrow">
                <Arrow />
              </div>
            </div>
            </>
          );
        })} */}
      </div>
      <div className="down-list">
        {cast.map((item) => {
          return (
            <div className="credit-row">
              <div>{item.name} </div>
              <div>.....</div>
              <div>{item.character}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Credit;

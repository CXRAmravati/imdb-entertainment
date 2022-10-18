import { useRouter } from "next/router";
import { getMovieCastCrew } from "pages/api";
import React from "react";
import { useQuery } from "react-query";
import Image from "next/image";

function CastComponent({ cast }) {
  console.log("cast iss", cast);
  const bannerImage = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="cast">
      <table>
        {cast.map((item, index) => {
          // console.log(cast.name);
          return (
            <tr>
              <td>
                {item.profile_path ? (
                  <Image
                    src={bannerImage + item.profile_path}
                    width={70}
                    height={70}
                  />
                ):<span>Unavailable</span>}
              </td>
              <td>{item.name}</td>
              <td>{item.character}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default CastComponent;

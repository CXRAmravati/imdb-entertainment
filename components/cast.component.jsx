import { useRouter } from "next/router";
import { getMovieCastCrew } from "pages/api";
import React from "react";
import { useQuery } from "react-query";
import Image from "next/image";

function CastComponent({ cast }) {
  const bannerImage = "https://image.tmdb.org/t/p/original/" + cast.profile_path;
  
  return (
    <div className="cast">
      <table>
       
        {cast.map((item, index) => {
          console.log(cast.name)
          return (
            <tr>
              <td>
                <Image src={bannerImage} width={50} height={50} />
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

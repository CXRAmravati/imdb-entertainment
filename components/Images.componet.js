import { useRouter } from "next/router";
import { getMovieCastCrew } from "pages/api";
import React from "react";
import { useQuery } from "react-query";
import Image from "next/image";

function ImageComponent({ images }) {
    console.log("asa",images)
    const bannerImage =
    "https://image.tmdb.org/t/p/original" + images.poster_path;
  return (
    <div className="images">
        <div className="cast-image">
<Image src=""/>
        </div>
    
    </div>
  );
}

export default ImageComponent;

import { useRouter } from "next/router";
import { getMovieCastCrew } from "pages/api";
import React from "react";
import { useQuery } from "react-query";
import Image from "next/image";

function ImageComponent({ images }) {
  console.log("asa", images.posters);
  const bannerImage = "https://image.tmdb.org/t/p/original";
  return (
    <div className="images">
      {images.posters &&
        images.backdrops.map((item, index) => {
          return (
            <div className="cast-image">
              <Image
                src={bannerImage + item.file_path}
                width={400}
                height={250}
              />
            </div>
          );
        })}
    </div>
  );
}

export default ImageComponent;

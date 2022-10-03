import Image from 'next/image'
import React from 'react'
import { useQuery } from 'react-query';
import { getAllGerners } from "pages/api";
export default function BannerPoster({ imagePath, movieInfo, title, name, rating, genresIds }) {
    const movieGeners = useQuery("genersData", () => getAllGerners());
    const bannerImage = "https://image.tmdb.org/t/p/original" + imagePath;
    const genersList = movieGeners.isSuccess ? movieGeners.data.genres : [];
    // console.log("object", genersList)
    const genersArray = genersList.filter((genresObj) => {
        for (let x of genresIds) {

            if (genresObj.id === x) {
                return genresObj
            }
        }
    })
    // console.log("Arry", genersArray)

    return (
        <div className='banner-poster'>

            <div className='banner-image' >

                <Image src={bannerImage} width={1920} height={780} alt="banner image" />
            </div>
            <div className='banner-info'>
                <span>{rating.toFixed(1)}/10</span>
                <h1 className='banner-title'>{title || name}</h1>
                <p className='banner-movie-info'>{movieInfo}</p>
                <p className='banner-movie-type-list'>
                    {genersArray.map((x, index) => {

                        return <span className='banner-movie-type' key={index}>{x.name} </span>

                    })}
                </p>
            </div>
        </div>
    )
}

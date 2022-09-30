import Image from 'next/image'
import React from 'react'

export default function BannerPoster({ imagePath, movieInfo }) {

    const bannerImage = "https://image.tmdb.org/t/p/original" + imagePath;


    return (
        <div className='banner-poster' >

            <Image src={bannerImage} width={1920} height={700} alt="banner image" className='banner-image' />


            <p className='movie-info'>{movieInfo}</p>

        </div>
    )
}

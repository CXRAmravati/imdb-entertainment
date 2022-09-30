import Image from 'next/image'
import React from 'react'

export default function BannerPoster({ imagePath, key }) {

    const bannerImage = "https://image.tmdb.org/t/p/w500" + imagePath;


    return (
        <div className='banner-poster' >

            <Image src={bannerImage} width={500} height={300} alt="banner image" />
        </div>
    )
}

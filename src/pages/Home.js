import React from 'react'
import Banner from "../components/Banner"
import Carousel from '../components/Carousel'
import FeaturedServiceProject from '../components/FeaturedServiceProject'
import OurFeaturedServices from '../components/OurFeaturedServices'
import ServicesOffer from '../components/ServicesOffer'


export default function Home() {
    return (
        <>
            <Carousel />
            <Banner />
            <ServicesOffer />
            <OurFeaturedServices />
            <FeaturedServiceProject />
        </>
    )
}

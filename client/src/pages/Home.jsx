import React from 'react'
import Header from '../components/Layout/Header/header';
import Footer from '../components/Layout/Footer/footer';
import Policy from '../components/Layout/Policy/policy';
import Slider from '../components/Slider/sliders';
import Categories from '../components/Categories/categories'
import Products from '../components/Products/products'
import CampaignSingle from "../components/CampaignSingle/campaignSingle";
import Campaigns from '../components/Campaigns/campaigns';

const Home = () => {
    return (
        <>
            <Header />
            <Slider />
            <Categories />
            <Products />
            <Campaigns />
            <Products/>
            <Policy />
            <CampaignSingle />
            <Footer />
        </>
    )
}

export default Home
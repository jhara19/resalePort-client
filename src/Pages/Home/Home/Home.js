import React from 'react';
import Banner from '../Banner/Banner';
import AdvertisedHub from '../Categories/Advertised/AdvertisedHub';
import Categories from '../Categories/Categories';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <Categories></Categories>
        <AdvertisedHub></AdvertisedHub>
        <Testimonials></Testimonials>
      </div>
    );
};

export default Home;
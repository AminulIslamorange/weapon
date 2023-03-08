import React, { useState } from 'react';
import Extra1 from '../Extra/Extra1';
import Extra2 from '../Extra/Extra2';
import Extra3 from '../Extra/Extra3';
import Extra4 from '../Extra/Extra4';
import Extra5 from '../Extra/Extra5';
import Extra6 from '../Extra/Extra6';
import Advertised from './Advertised/Advertised';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import HowWork from './HowWork/HowWork';

const Home = () => {


    return (
        <div>
            <Banner />
            <Categories />
            <Advertised />
            <Extra2></Extra2>
            <Extra5/>
            <HowWork />
            <Extra3/>
            <Extra4/>
            <Extra6/>
            
            


        </div>
    );
};

export default Home;
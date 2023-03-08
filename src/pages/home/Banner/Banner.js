import React from 'react';
import { Col, Row } from 'react-bootstrap';
import banner from '../../../assets/images/banner.jpg';
import Carousel from 'react-bootstrap/Carousel';
import './Banner.css'

const Banner = () => {
    return (
        <Carousel fade className='mx-10'>
        <Carousel.Item>
          <img
            className="d-block w-80 rounded p-2"
            src="https://www.fieldandstream.com/uploads/2019/06/04/CV4RJ3M2BUI2TKO47XEYN5CKWY-1024x439.jpg"
          alt='' />
          <Carousel.Caption className='text-black'>
            <h3>Find the Gun You Want, Your Way</h3>
            <p> Then, build your deal to fit your needs.</p>
            <button className='btn btn-primary'>Buy Now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-80 rounded p-2 "
            src="https://img.freepik.com/free-vector/vintage-gun_1308-82910.jpg?w=996&t=st=1678114657~exp=1678115257~hmac=b7dd331cf99d861468525fd6c3c908502a8b17a6c82822454652f26c6e0ef6cc"
            alt="Second slide"
          />
  
          <Carousel.Caption className='text-black'>
            <h3>Find the Gun You Want, Your Way</h3>
            <p> Then, build your deal to fit your needs.</p>
            <button className='btn btn-primary'>Buy Now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-70 rounded p-2"
            src="https://img.freepik.com/free-vector/black-pistol-white_1308-36380.jpg?w=740&t=st=1678114682~exp=1678115282~hmac=eccc33787996b314f36b1e161655bb740cb4cedad46216a2ac93cfe2c7b19dfa"
            alt="Third slide"
          />
  
          <Carousel.Caption className='text-black'>
            <h3>Find the Gun You Want, Your Way</h3>
            <p>
            Then, build your deal to fit your needs.
            </p>
            <button className='btn btn-primary'>Buy Now</button>
            
          </Carousel.Caption>
          
        </Carousel.Item>
      </Carousel>
        
    );
};

export default Banner;
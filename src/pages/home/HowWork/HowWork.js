import React from 'react';
import { Col, Row } from 'react-bootstrap';
import sell from '../../../assets/images/sell.svg'
import buy from '../../../assets/images/buy.svg'
import meet from '../../../assets/images/meet.svg'
import './HowWork.css'

const HowWork = () => {
    return (
        <div className='my-5'>
            <h1 className='text-center pt-5 mb-5'>Know about weapon world !</h1>
            <Row>
                <Col className="d-flex flex-column justify-content-between mb-3" sm={12} md={6} lg={4}>
                    <div>
                        <h4 className='fw-bold'>Sell Your Gun</h4>
                        <p>You can sell your used Gun here by posting your Guns image with it's details.</p>
                    </div>
                    <div>
                        <img className='hwImg' src='https://assets.basspro.com/image/list/fn_select:jq:first(.%5B%5D%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/2802780.json' alt="" />
                    </div>
                </Col>
                <Col className="d-flex flex-column justify-content-between mb-3" sm={12} md={6} lg={4}>
                    <div>
                        <h4 className='fw-bold'>Buy Gun</h4>
                        <p>Buy used Guns as you want. You will get different type and different price Guns here.</p>
                    </div>
                    <div>
                        <img className='hwImg' src={buy} alt="" />
                    </div>
                </Col>
                <Col className="d-flex flex-column justify-content-between mb-3" sm={12} md={6} lg={4}>
                    <div>
                        <h4 className='fw-bold'>Receive Gun</h4>
                        <p>You have to meet with seller/buyer to sell/buy Gun at your desired location.</p>
                    </div>
                    <div>
                        <img className='hwImg' src={meet} alt="" />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default HowWork;
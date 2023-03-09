import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blogs = () => {
    return (
        <Accordion defaultActiveKey="0" className='my-5'>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Why Weapon World?</Accordion.Header>
          <Accordion.Body>
           Weapon World is the bigest Gun shop in the city.You can all  categories gun in our shop.you can buy second hand gun from us.And you can sell your gun .We provide  Any time costomer  saport.you can bye all gun exesorise and bullet,magazine etc..
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>About Our Costomer Sapport</Accordion.Header>
          <Accordion.Body>
           All time we provide cosmomer saport and our all stap provide good behibaor with any costomer.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>About Our Shop</Accordion.Header>
          <Accordion.Body>
           This is the bigest shop in the city.Any time any person can and buy gun from us after showing their Licence or Gun card.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Great offer</Accordion.Header>
          <Accordion.Body>
           We provide Great offer any festival day and...Then you can buy gun from us in offer value.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
};

export default Blogs;
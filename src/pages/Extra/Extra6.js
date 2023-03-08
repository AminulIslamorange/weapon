import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


const Extra6 = () => {
    return (
        <div className='py-5 text-center'>
            <h2>For Direct Message</h2>
            
            <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control className=' my-2'  type="email" placeholder="Type Your Email Email" />
        <Form.Control className='my-2'   type="email" placeholder="Please Input Your Name" />
        <FloatingLabel controlId="floatingTextarea2" label="Message">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
        
        
      </Form.Group>
      <button className='btn btn-primary'>Submit Now</button>

      
    
     
    </Form>
          
            
        </div>
    );
};

export default Extra6;
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
import axios from 'axios';
import { useQuery } from 'react-query';
import { signOut } from 'firebase/auth';
import { Button, Table } from 'react-bootstrap';
import useToken from '../../hooks/useToken';
import { Link } from 'react-router-dom';


const MyOrders = () => {
    const [user, loading, error] = useAuthState(auth);


    const { isLoading, data: orders, refetch } = useQuery(['allorders', user], () =>
        fetch(`http://localhost:5000/orders/${user?.email}`, {
            method: "get",
           
        }).then(res => {
           
            return res.json()
        }
        )
    )
    if (isLoading) {
        return <p className='text-center mt-5'>Loading...</p>
    }
    console.log(orders);
    return (
        <div className='py-5'>
            <h1 className='text-center'>Order List</h1>
            <Table className='text-center' striped bordered hover>
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Gun</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {orders?.map((order, index) => <tr>
                        <td>{index + 1}</td>
                        <td>{
                            <div>
                                <img style={{ width: "100px" }} src={order.car.img} alt="" />
                                <h4>{order.car.name}</h4>
                            </div>
                        }
                        </td>
                        <td>{order.car.resalePrice}$</td>
                        <td><Link to='/payment'><Button>PAY</Button></Link></td>

                        {/* <td>{order.car.resalePrice %% !paid &&$</td>
                        <td><Button>PAY</Button></td> */}


                        





                    </tr>)}

                </tbody>
            </Table>
        </div>
    );
};

export default MyOrders;
// import logo from './logo.svg';
// import './App.css';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Footer from './pages/shared/Footer/Footer';
import Login from './pages/shared/Login/Login';
import NavBar from './pages/shared/Navbar/Navbar';
import Signup from './pages/shared/Signup/Signup';
import { Toaster } from 'react-hot-toast';
import Blogs from './pages/Blogs/Blogs';
import NotFound from './pages/shared/NotFound/NotFound';
import RequireAuth from './pages/shared/RequireAuth/RequireAuth';
import Cars from './pages/home/Cars.js/Cars';
import Dashboard from './pages/Dashboard/Dashboard';
import MyOrders from './pages/Dashboard/MyOrders';
import RequireAdmin from './pages/shared/RequireAuth/RequireAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase/firebase.init';
import useRole from './hooks/useRole';
import MyCars from './pages/Dashboard/MyCars';
import AddCar from './pages/Dashboard/AddCar';
import { useEffect, useState } from 'react';
import RequireSeller from './pages/shared/RequireAuth/RequireSeller';
import RequireUser from './pages/shared/RequireAuth/RequireUser';
import ViewAllSellers from './pages/Dashboard/ViewAllSellers';
import ViewAllBuyers from './pages/Dashboard/ViewAllBuyers';
import Payment from './pages/Dashboard/Payment/Payment';

function App() {
  
  const [reLoad, setReload] = useState(false)
  const [user, loading, error] = useAuthState(auth);
  const [userRole, userLoading] = useRole(user, reLoad, setReload);
  const [thisRouteReload, setThisRouteReload] = useState(false)
  useEffect(() => {
    fetch(`http://localhost:5000/orders/{user.?email}`)
      .then(res => res.json())
      .then(data => {
        setThisRouteReload(!thisRouteReload)
      })
    fetch(`http://localhost:5000/sellercars/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setThisRouteReload(!thisRouteReload)
      })
  }, [user, userRole])
  return (
    <>
      <Container className="App">
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/login" element={<Login reLoad={reLoad} setReload={setReload} />} />
          <Route path="/signup" element={<Signup reLoad={reLoad} setReload={setReload} />} />
          <Route path="/blogs" element={<Blogs />} />
          {/* dashboard for users  */}
          {userRole == "user" && <> <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
            <Route index element={<RequireUser><MyOrders /></RequireUser>}></Route>
          </Route> </>}
          {/* dashboard for sellers  */}
          {userRole == "seller" && <> <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
            <Route index element={<RequireSeller><MyCars /></RequireSeller>}></Route>
            <Route path="AddCar" element={<RequireSeller><AddCar /></RequireSeller>}></Route>
          </Route> </>}
          {/* dashboard for admin  */}
          {userRole == "admin" && <> <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
            <Route index element={<RequireAdmin><ViewAllSellers /></RequireAdmin>}></Route>
            <Route path="allbuyers" element={<RequireAdmin><ViewAllBuyers /></RequireAdmin>}></Route>
          </Route> </>}

         

          {/* Hare I have chenge for user Frindly<RequireAuth></RequireAuth> */}


          <Route path="/category/:cartCategory" element={<Cars />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <Toaster />
      </Container>

    </>
  );
}

export default App;

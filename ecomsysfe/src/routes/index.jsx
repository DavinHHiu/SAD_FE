import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Cart from '../pages/Cart';
import Order from '../pages/Order';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/search" element={<Search />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/order" element={<Order />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

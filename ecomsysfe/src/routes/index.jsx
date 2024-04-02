import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Cart from '../pages/Cart';
import Order from '../pages/Order';

var login = localStorage.getItem('user_id');

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/login" element={!login ? <Login /> : <Navigate to="/" />} />
                <Route path="/register" element={!login ? <Register /> : <Navigate to="/" />} />
                <Route path="/profile" element={login ? <Profile /> : <Login />} />
                <Route path="/cart" element={login ? <Cart /> : <Login />} />
                <Route path="/order" element={login ? <Order /> : <Login />} />
            </Routes>
        </BrowserRouter>
    );
}

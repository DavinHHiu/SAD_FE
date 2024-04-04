import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Cart from '../pages/Cart';
import Order from '../pages/Order';

export default function Router() {
    const login = localStorage.getItem('user_id');

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/search/:q" element={<Search />} />
                <Route path="/login" element={!login ? <Login /> : <Navigate to="/" />} />
                <Route path="/register" element={!login ? <Register /> : <Navigate to="/" />} />
                <Route path="/profile" element={login ? <Profile /> : <Navigate to="/login" />} />
                <Route path="/cart" element={login ? <Cart /> : <Navigate to="/login" />} />
                <Route path="/order" element={login ? <Order /> : <Navigate to="/login" />} />
            </Routes>
        </BrowserRouter>
    );
}

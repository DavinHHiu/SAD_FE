import Logo from '../../assets/icons/logo.svg?react';
import UserAva from '../../assets/icons/user-ava.svg?react';
import Cart from '../../assets/icons/cart.svg?react';
import CartIcon from '../CartIcon';
import style from './Header.module.scss';
import { Link } from 'react-router-dom';

function Header({ cartItems }) {
    // console.log(addToCart);

    return (
        <header className={style.header_container}>
            <Link to="/" className={style.header_logo}>
                <Logo />
                <span className={style.corporate_name}>Price Tag</span>
            </Link>
            <div className={style.header_nav}>
                <ul className={style.header_nav_list}>
                    <li className={style.header_nav_item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={style.header_nav_item}>
                        <Link to="/search">Search</Link>
                    </li>
                    <li className={style.header_nav_item}>
                        <a href="/profile">Profile</a>
                    </li>
                </ul>
            </div>
            <div className={style.header_links}>
                <a href="/profile">
                    <UserAva className={style.header_links_item} />
                </a>
                <a href="/cart">
                    <CartIcon className={style.header_links_item} cartItems={cartItems} />
                </a>
            </div>
        </header>
    );
}

export default Header;

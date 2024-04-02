import Logo from '../../assets/icons/logo.svg?react';
import UserAva from '../../assets/icons/user-ava.svg?react';
import Cart from '../../assets/icons/cart.svg?react';
import style from './Header.module.scss';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className={style.header_container}>
            <Link href="/" className={style.header_logo}>
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
                        <Link to="/profile">Profile</Link>
                    </li>
                </ul>
            </div>
            <div className={style.header_links}>
                <UserAva className={style.header_links_item} />
                <Cart className={style.header_links_item} />
            </div>
        </header>
    );
}

export default Header;

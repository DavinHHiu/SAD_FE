import Logo from '../../assets/icons/logo.svg?react';
import UserAva from '../../assets/icons/user-ava.svg?react';
import Cart from '../../assets/icons/cart.svg?react';
import style from './Header.module.scss';

function Header() {
    return (
        <header className={style.header_container}>
            <div className={style.header_logo}>
                <Logo />
                <span className={style.corporate_name}>Price Tag</span>
            </div>
            <div className={style.header_nav}>
                <ul className={style.header_nav_list}>
                    <li className={style.header_nav_item}>
                        <a href="/">Home</a>
                    </li>
                    <li className={style.header_nav_item}>
                        <a href="/search">Search</a>
                    </li>
                    <li className={style.header_nav_item}>
                        <a href="/profile">Profile</a>
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

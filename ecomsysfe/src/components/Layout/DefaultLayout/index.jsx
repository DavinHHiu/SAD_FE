import Footer from '../../../common/Footer';
import Header from '../../../common/Header';
import style from './DefaultLayout.module.scss';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className={style.container}>
                <div className={style.content}>{children}</div>
            </div>
        </>
    );
}

export default DefaultLayout;

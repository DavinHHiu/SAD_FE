import Form from '../../components/Form';
import style from './Login.module.scss';

export default function Login() {
    return (
        <div className={style.container}>
            <Form className={style.form}>
                <span className={style.title}>Login</span>
                <input className={style.input} type="text" placeholder="Username" />
                <input className={style.input} type="text" placeholder="Password" />
                <button className={style.button}>Login</button>
            </Form>
        </div>
    );
}

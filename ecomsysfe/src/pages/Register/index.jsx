import Form from '../../components/Form';
import style from './Register.module.scss';

export default function Register() {
    return (
        <div className={style.container}>
            <Form className={style.form}>
                <span className={style.title}>Register</span>
                <input className={style.input} type="text" placeholder="Email" />
                <input className={style.input} type="text" placeholder="Username" />
                <input className={style.input} type="text" placeholder="Password" />
                <button className={style.button}>Register</button>
            </Form>
        </div>
    );
}

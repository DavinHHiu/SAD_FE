import { useState } from 'react';
import Form from '../../components/Form';
import style from './Register.module.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        username: '',
        password: '',
    });

    const handleSetData = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value,
        });
    };

    const handleRegister = () => {
        axios.post('http://localhost:8000/api/register/', data).then((response) => {
            if (response.status === 201 && response.data) {
                localStorage.setItem('user_id', JSON.stringify(response.data.user_id));
                navigate('/');
            }
        });
    };

    return (
        <div className={style.container}>
            <Form className={style.form}>
                <span className={style.title}>Register</span>
                <input
                    className={style.input}
                    type="text"
                    placeholder="Email"
                    value={data.email}
                    name="email"
                    onChange={handleSetData}
                />
                <input
                    className={style.input}
                    type="text"
                    placeholder="Username"
                    value={data.username}
                    name="username"
                    onChange={handleSetData}
                />
                <input
                    className={style.input}
                    type="text"
                    placeholder="Password"
                    value={data.password}
                    name="password"
                    onChange={handleSetData}
                />
                <button className={style.button} onClick={handleRegister}>
                    Register
                </button>
            </Form>
        </div>
    );
}

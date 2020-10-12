import React, { useState, useCallback } from 'react';
import './Login.scss';

export default function Login({ signin, app: { authFail } }) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const onLoginChange = useCallback((event) => setLogin(event.target.value));
    const onPasswordChange = useCallback((event) => setPassword(event.target.value));
    const onSubmit = useCallback((event) => {
        event.preventDefault();
        signin({ login, password });
    });

    return (
        <form className="login-form" onSubmit={onSubmit}>
            <p>Авторизуйтесь</p>
            {authFail && <p style={{ color: '#f00', fontSize: 12 }}>{authFail}</p>}
            <p>
                <input type="name" value={login} onChange={onLoginChange} placeholder="Введите имя пользователя" />
            </p>
            <p>
                <input type="password" value={password} onChange={onPasswordChange} placeholder="Введите пароль" />
            </p>
            <p><button type="submit">Войти</button></p>
        </form>
    );
}

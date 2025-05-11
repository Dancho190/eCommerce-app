// src/pages/Login.tsx
import React from 'react';
import { useForm } from 'react-hook-form'; // Настраиваем формы и валидацию.
import { Link } from 'react-router-dom'; // Роутинг для навигации.
import './Login.css';

type FormData = { // Настраиваем типы данных что будут отправляться на бэк.
  username: string;
  password: string;
};

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Logging in with:', data);
    // здесь будет логика входа
  };

  return (
     <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <h2>Login</h2>

          <div className="form-group">
            <label>Username</label>
            <input
              {...register('username', { required: 'Username is required' })}
              placeholder="Enter username"
            />
            {errors.username && <p className="error">{errors.username.message}</p>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              {...register('password', { required: 'Password is required' })}
              placeholder="Enter password"
            />
            {errors.password && <p className="error">{errors.password.message}</p>}
          </div>

          <button type="submit" className="btn">Login</button>

          <p className="link-text">
            Don’t have an account? <Link to="/register">Register</Link>
          </p>
        </form>
    </div>
  );
};

export default Login;

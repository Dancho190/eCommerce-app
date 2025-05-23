// src/pages/Login.tsx
import React from 'react';
import { useForm } from 'react-hook-form'; // Настраиваем формы и валидацию.
import { Link, useNavigate } from 'react-router-dom'; // Роутинг для навигации.
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

  // Навигация
  const navigate = useNavigate()

  //
  const onSubmit = async (data: FormData) => { // Фетч на бэкенд с получением токена
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log('Response status:', response.status);
      const result = await response.json();

      if (response.ok) {
        console.log(' Logged in:', result);
        localStorage.setItem('accessToken', result.access_token); // сохранить токен
        navigate('/home')
      } else {
        console.error('❌ Login failed:', result.message);
        alert(result.message);
      }
    } catch (error) {
      console.error('❌ Network error:', error);
      alert('Network error. Please try again.');
    }
  };


  return (
    <div className="auth-background">
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
   </div>
  );
};

export default Login;

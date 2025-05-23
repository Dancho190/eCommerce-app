import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

type RegisterFormData = { // Типы данных что будут отправлены на бэк
  username: string;
  email: string;
  password: string;
};

const Register: React.FC = () => {
  const navigate = useNavigate() // навигация
  const {
    register, // Функции-Хэндлеры
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

   const onSubmit = async (data: RegisterFormData) => { // Фетч что отправляет юзера на бэкенд
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // если нужно сохранить сессию
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const err = await response.json(); // Error-handling
        throw new Error(err.message || 'Registration failed');
      }

      const result = await response.json();
      console.log('User registered:', result);
      navigate('/login');
    } catch (error: any) {
      alert(error.message || 'Registration failed');
    }
  };

  return (
    <div className="auth-background">
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Register</h2>

        <div className="form-group">
          <label>Username</label>
          <input
            {...register('username', { required: 'Username is required' })}
            placeholder="Enter username"
          />
          {errors.username && <p className="error">{errors.username.message}</p>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email" // Валидация Email-ов
            {...register('email', { required: 'Email is required' })}
            placeholder="Enter email"
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
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

        <button type="submit" className="btn">Register</button>

        <p className="link-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
    </div>
  );
};

export default Register;
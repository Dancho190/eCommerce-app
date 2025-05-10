const mongoose = require('mongoose');

// Создаем схему пользователя
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required'],
      minlength: [3, 'Username must be at least 3 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [5, 'Password must be at least 5 characters'],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Добавь сюда хэширование пароля потом.Либо в мидвлейр запихни.

// Экспортируем модель
const User = mongoose.model('User', userSchema);
module.exports = User;
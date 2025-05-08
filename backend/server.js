const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authRoutes = require('../routes/authRoutes');

dotenv.config(); // Для загрузки переменных окружения

// Инициализация приложения
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json()); // Парсинг JSON тела запросов

// Маршруты
app.use('/api/auth', authRoutes); // Роуты для аутентификации

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
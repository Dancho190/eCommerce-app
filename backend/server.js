const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes.js');
const productRoutes = require('./routes/productRoutes.js')

dotenv.config(); // Для загрузки переменных окружения

// Инициализация приложения
const app = express();
const port = process.env.PORT || 5000;

// Настройка CORS-ов
app.use(cors({
  origin: 'https://aimaq-store.netlify.app',  // Адрес фронтенда
  credentials: true,               
}));

// Middleware
app.use(bodyParser.json()); // Парсинг JSON тела запросов

// Маршруты
app.use('/api/auth', authRoutes); // Роуты для аутентификации
app.use('/api', productRoutes); // Роуты для продуктов

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
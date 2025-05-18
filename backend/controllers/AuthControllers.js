const { createCustomer } = require("../middleware/commercetools.js")
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const { 
  CTP_CLIENT_ID,
  CTP_CLIENT_SECRET,
  CTP_PROJECT_KEY,
  CTP_AUTH_URL,
  CTP_API_URL,
} = process.env

// Контроллер для регистрации и логина
 const register = async (req, res) => {
  const { username, email, password } = req.body;

  // Пример простой логики регистрации (должна быть реальная логика)
  try {
    const customer = await createCustomer({ email, password, username });
    res.status(201).json({ message: "User registered", customer });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Функция логина через commercetools api
const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  // ... rest of the code remains the same ...
  const auth = Buffer.from(`${CTP_CLIENT_ID}:${CTP_CLIENT_SECRET}`).toString("base64"); // Хэдеры авторизации

   const userScopes = `manage_customers:${CTP_PROJECT_KEY} manage_orders:${CTP_PROJECT_KEY}`; // Скоупы для авторизации

  // Get access token
  const body = `grant_type=password&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&scope=${encodeURIComponent(userScopes)}`; // Тело запроса в формате x-www

  try {
    const response = await axios.post(
      `${CTP_AUTH_URL}/oauth/${CTP_PROJECT_KEY}/customers/token`, // Url
      body,
      { // Хэдеры
        headers: {
          Authorization: `Basic ${auth}`, // Аутентификация клиента с токеном в хэдерах
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    if (!response.data.access_token) {
      return res.status(401).json({ message: 'No token returned' });
    }

  
    // Ответ клиенту

    return res.status(200).json({
      message: 'User logged in successfully',
      access_token: response.data.access_token,
      expires_in: response.data.expires_in,
      scope: response.data.scope,
    });
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    return res.status(401).json({ message: 'Invalid credentials or login failed' });
  }
};

module.exports = { register, login };
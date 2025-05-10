const { createCustomer } = require("../middleware/commercetools.js")

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

const login = (req, res) => {
  const { username, password } = req.body;

  // Пример простой логики логина (должна быть реальная логика)
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  // Здесь должна быть логика для проверки данных пользователя и генерации токена (например, JWT)
  res.status(200).json({ message: 'User logged in successfully' });
};

module.exports = { register, login };
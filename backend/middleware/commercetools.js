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

// Получение access_token
async function getCTAccessToken() {
  const auth = Buffer.from(`${CTP_CLIENT_ID}:${CTP_CLIENT_SECRET}`).toString("base64");

  const scope = `manage_customers view_project_settings manage_orders`

  try {
    const response = await axios.post(
      `${CTP_AUTH_URL}/oauth/token`,
      `grant_type=client_credentials&scope=manage_project:${CTP_PROJECT_KEY}`,
      {
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return response.data.access_token;
  } catch (error) {
    console.error("Failed to get access token:", error.response ? error.response.data : error.message);
    throw new Error("Access token error");
  }
}

// Создание кастомера в CommerceTools
const createCustomer = async ({ email, password, username }) => {
  const token = await getCTAccessToken();

  try {
    const response = await axios.post(
      `${CTP_API_URL}/${CTP_PROJECT_KEY}/customers`,
      {
        email,
        password,
        firstName: username,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Failed to create customer:", error.response ? error.response.data : error.message);
    throw new Error("Customer creation failed");
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  const auth = Buffer.from(`${CTP_CLIENT_ID}:${CTP_CLIENT_SECRET}`).toString("base64");

  try {
    const response = await axios.post(
      `${CTP_AUTH_URL}/oauth/${CTP_PROJECT_KEY}/customers/token`,
      `grant_type=password&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`,
      {
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return res.status(200).json({
      message: 'User logged in successfully',
      access_token: response.data.access_token,
      expires_in: response.data.expires_in,
      scope: response.data.scope
    });

  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    return res.status(401).json({ message: 'Invalid credentials or login failed' });
  }
};

module.exports = {
  getCTAccessToken,
  createCustomer,
  login
};

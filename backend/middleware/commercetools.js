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

module.exports = {
  getCTAccessToken,
  createCustomer,
};

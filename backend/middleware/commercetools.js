import { ClientBuilder } from '@commercetools/sdk-client-v2';
import dotenv from 'dotenv';

dotenv.config();

const client = new ClientBuilder()
  .withClientCredentialsFlow({
    host: import.meta.env.CTP_AUTH_URL,
    projectKey: import.meta.env.CTP_PROJECT_KEY,
    credentials: {
      clientId: import.meta.env.CTP_CLIENT_ID,
      clientSecret: import.meta.env.CTP_CLIENT_SECRET,
    },
  })
  .withHttpMiddleware({
    host: import.meta.env.CTP_API_URL,
  })
  .build();

export default client;

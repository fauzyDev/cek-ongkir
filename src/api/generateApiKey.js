import { v4 as uuidv4 } from 'uuid';

const generatedKeys = new Set(); 

export const generateApiKey = () => {
  const apiKey = uuidv4();
  generatedKeys.add(apiKey);
  return apiKey;
};

export const isApiKeyValid = (key) => {
  return generatedKeys.has(key);
};

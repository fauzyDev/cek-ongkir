import { isApiKeyValid } from "../api/generateApiKey.js";

export const checkApiKey = (req, res, next) => {
  const key = req.headers['token-api'];
  if (!key || !isApiKeyValid(key)) {
    return res.status(403).json({ message: 'API Key tidak valid atau tidak ada' });
  }
  next();
};

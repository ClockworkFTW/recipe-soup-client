const API_URL = import.meta.env.DEV
  ? "http://localhost:3000/api"
  : "https://www.recipesoup.app/api";

export default {
  API_URL,
};

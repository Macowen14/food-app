import axios from "axios";

export const fetchMealsData = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.get("http://localhost:6000/api/meals");
    return response.data;
  } catch (error) {
    throw error;
  }
};

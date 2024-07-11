import axios from "axios";

export const fetchMealsData = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/meals");
    return response.data;
  } catch (error) {
    throw error;
  }
};

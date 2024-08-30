import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

class SnackOrBoozeApi {

  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }

  static async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    return result.data;
  }

  // Add more methods as needed, e.g., to add snacks or drinks.
}

export default SnackOrBoozeApi;

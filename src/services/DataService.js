import axios from "axios";

export default class DataService {
  static async fetchHeroes() {
    try {
      const resp = await axios.get(
        "https://api.opendota.com/api/constants/heroes"
      );

      return Object.values(resp.data);
    } catch (err) {
      return [];
    }
  }
}

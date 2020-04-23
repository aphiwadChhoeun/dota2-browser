import axios from "axios";
import heroes from "./heroes.json";

export default class DataService {
  static async fetchHeroes() {
    if (heroes) {
      return new Promise((resolve, reject) => resolve(Object.values(heroes)));
    }
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

import axios from "axios";
import heroes from "./heroes.json";
import heroLore from "./lore.json";

export default class DataService {
  static async fetchHeroes() {
    if (heroes) {
      return Object.values(heroes);
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

  static async fetchHeroLore() {
    if (heroLore) {
      return heroLore;
    }

    return [];
  }
}

import {
  AsyncStorage
} from "react-native";

export default class LocalStorage {
  static async set(key, value) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log('Error set localStorage:', e)
    }
  }

  static async get(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      return value || ''
    } catch (e) {
      console.log('Error get localStorage:', e)
    }
  }

  static remove() {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.log(e);
    }
  }
}
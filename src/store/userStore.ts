import { observable, action, computed } from "mobx";
import * as user from "@/api/user";
import * as LocalStorage from "@/utils/LocalStorage";

class User {
  @observable info = {};
  @action
  async login({ phone, password }) {
    try {
      const res = await Request.post('/customer/login', { phone, password })

      await LocalStorage.storeData("token", res.data.token);
      this.getInfo();
      return true;
    } catch (error) {
      return false;
    }
  }

  @action
  async getInfo() {
    try {
      const res = await user.getInfo();
      this.info = res.data;
      return true;
    } catch (error) {
      return false;
    }
  }
}

export default new User();

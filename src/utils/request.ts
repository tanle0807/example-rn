import axios from "axios";
import { url } from "./config";
import * as LocalStorage from "./LocalStorage";
import { Alert } from "react-native";
import { Navigation } from "./Navigation";
// create an axios instance
const service = axios.create({
  baseURL: url.base, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
});

// request interceptor
service.interceptors.request.use(
  async config => {
    // do something before request is sent
    let token: String = await LocalStorage.getData("token");
    if (token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers["token"] = token;
    }
    return config;
  },
  error => {
    // do something with request error
    // eslint-disable-next-line no-console
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data;
    // if the custom code is not 20000, it is judged as an error.
    if (response.status !== 200) {
      alert(res.message);
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  error => {
    debugger;
    if (error.response.status === 401) {
      Navigation.reset("Welcome");
    }
    console.log("err request", error);

    Alert.alert("Thông báo", error.response.data.message);
    return Promise.reject(error);
  }
);

export default service;

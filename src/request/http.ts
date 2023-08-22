import axios, { AxiosRequestConfig } from "axios";
import "./request";
import qs from "qs";
import { ElMessage } from "element-plus";

export default {
  get: function (url: string, params: any) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          params,
        })
        .then((res) => {
          // console.log("res===>", res.data.success == undefined);

          if (res.data.status == "False") {
            ElMessage.error(res.data.message);
            return reject(res.data.message);
          }

          if (res.data.success == undefined) return resolve(res.data);
          if (res.data.success) {
            resolve(res.data);
          } else {
            ElMessage.error(res.data.msg);

            reject(res.data.msg);
          }
        })
        .catch((err) => {
          ElMessage.error(err);

          reject(err);
        });
    });
  },
  post: function (url: string, params: any) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, qs.stringify(params), {
          headers: { [`Content-Type`]: "application/x-www-form-urlencoded" },
        })
        .then((res) => {
          if (res.data.status == "False") {
            ElMessage.error(res.data.message);
            return reject(res.data.message);
          }

          if (res.data.success == undefined) return resolve(res.data);

          if (res.data.success) {
            resolve(res.data);
          } else {
            ElMessage.error(res.data.msg);
            reject(res.data.msg);
          }
        })
        .catch((err) => {
          ElMessage.error(err);
          reject(err);
        });
    });
  },
};

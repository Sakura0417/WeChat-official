import axios from "axios";
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
} from "axios";
import { ElMessage } from "element-plus";
import { useUserStore } from "@/store/modules/user";
import router from "@/router";

const userStore = useUserStore();
// const router = useRouter();

const whiteList = ["/login"];
/**
 * 验证是否在白名单中
 * @param url
 */
const hasPremission = (url: string) => {
  // 在白名单中
  if (whiteList.indexOf(url) !== -1) {
    return true;
  }
  return false;
};

axios.defaults.baseURL = userStore.getBaseUrl;
axios.defaults.timeout =
  (window as any).global_config.REQUEST_TIMEOUT || 180000;

/**
 * 请求拦截器
 */
axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const requestUrl: string = config.url as string;
    const token = userStore.getToken;
    // config.baseURL = userStore.getBaseUrl;

    // if (config.url == "/applyInfo/saveOrUpdate") {
    //   config.timeout = 180000;
    // }

    // 判断是否在白名单中 =>白名单的接口不需要传token
    if (!hasPremission(requestUrl)) {
      (config.headers as AxiosRequestHeaders)["Authorization"] = token
        ? token
        : "";
    }
    // console.log("config", config);

    return config;
  },
  (err) => {
    //拦截失败
    return Promise.reject(err);
  }
);
/**
 * 响应拦截器
 */
axios.interceptors.response.use(
  (response) => {
    if (response) {
      switch (response.data.code) {
        case "200":
          break;
        case "-1":
          // Message.error({
          //   message: "请求失败",
          // });
          break;
      }
    }
    return response;
  },

  (error) => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = "请求错误";
          break;
        case 401: {
          error.message = "未授权，请登录";
          router.push("/");
          // console.log('1123',useRouter())
          // router.replace({
          //   path: "login",
          //   query: {
          //     redirect: router.currentRoute.path,
          //   },
          // });
          // window.location.reload()
          break;
        }
        case 403:
          error.message = "没有权限，拒绝访问";
          break;
        case 404:
          error.message = `请求地址出错`;
          break;
        case 408:
          error.message = "请求超时";
          break;
        case 500:
          error.message = "服务器内部错误";
          break;
        case 501:
          error.message = "服务未实现";
          break;
        case 502:
          error.message = "网关错误";
          break;
        case 503:
          error.message = "服务不可用";
          break;
        case 504:
          error.message = "网关超时";
          break;
        case 505:
          error.message = "HTTP版本不受支持";
          break;
        default:
          error.message = "请求失败";
          break;
      }
    }
    // ElMessage.error(error.message);
    return Promise.reject(error);
  }
);
export default axios;

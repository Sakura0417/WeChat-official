import http from "@/request/http";
// import { LoginParams } from "@/api/model";
enum Api {
    /** 账户 */
    CHANGE_PASSWORD = "/restPassword",
    GET_TIMESTAMP = "/services/timestamp",

    /** 项目管理 */
    GET_PROJECT_LIST = "/list_project",

    /** 服务管理 */
    GET_SERVICE_LIST = "/list_namespaced_deployment",
    DOWNLOAD_PACKAGES = "/save_images",
    PUSH_SERVICE_IMAGES = "/services/images/push",
    PUSH_SERVICE_IMAGES_SH = "/services/images/push/sh",

    /** 仓库管理 */
    GET_REPOSITORY_LIST = "/repository/list",
    ADD_NEW_REPOSITORY = "/repository/add",
    UPDATE_REPOSITORY = "/repository/update",
    DELETE_REPOSITORY_BY_ID = "/repository/delete",
    GET_PROJETLIST_BY_ID = "/v1/harbor/projects/list",
    GET_MIRRORLISTS = "/v1/harbor/repositories/list",
    PUSH_IMAGES = "/repository/images/push",
    GET_PUSH_LOGS = "/repository/images/pushlogs",
    GET_PUSH_SCRIPT_LOGS = "/services/images/push/shlogs",
    GET_PROVIDERS_LIST = "/repository/providers/list",

    /** 集群管理 */
    GET_CLUSTER_LISTS = "/cluster/list",
    GET_RANCHER_LISTS = "/project/list",
    GET_NAMESPACED_DEPLOYMENT_LISTS = "/list_namespaced_deployment_pod_status",
}

export const getNamespacedDeployment = (params?: any) =>
    http.post(Api.GET_NAMESPACED_DEPLOYMENT_LISTS, params);
export const getRancherProjectById = (params?: any) =>
    http.post(Api.GET_RANCHER_LISTS, params);
export const getClusterList = (params?: any) =>
    http.get(Api.GET_CLUSTER_LISTS, params);
export const getTimestamp = (params?: any) =>
    http.get(Api.GET_TIMESTAMP, params);
export const getPushShLogs = (params?: any) =>
    http.post(Api.GET_PUSH_SCRIPT_LOGS, params);
export const pushServiceImagesSh = (params?: any) =>
    http.post(Api.PUSH_SERVICE_IMAGES_SH, params);
export const getProvidersList = (params?: any) =>
    http.get(Api.GET_PROVIDERS_LIST, params);
export const getPushLogs = (params?: any) =>
    http.post(Api.GET_PUSH_LOGS, params);
export const pushServiceImages = (params?: any) =>
    http.post(Api.PUSH_SERVICE_IMAGES, params);
export const pushImages = (params?: any) => http.post(Api.PUSH_IMAGES, params);
export const getMirrorLists = (params?: any) =>
    http.post(Api.GET_MIRRORLISTS, params);
export const getProjectListById = (params?: any) =>
    http.post(Api.GET_PROJETLIST_BY_ID, params);
export const updateRepositoryById = (params?: any) =>
    http.post(Api.UPDATE_REPOSITORY, params);
export const deleteRepositoryById = (params?: any) =>
    http.post(Api.DELETE_REPOSITORY_BY_ID, params);
export const addNewRepository = (params?: any) =>
    http.post(Api.ADD_NEW_REPOSITORY, params);
export const downloadPackagesByName = (params?: any) =>
    http.post(Api.DOWNLOAD_PACKAGES, params);
export const getServiceList = (params?: any) =>
    http.post(Api.GET_SERVICE_LIST, params);
export const getProjectList = (params?: any) =>
    http.get(Api.GET_PROJECT_LIST, params);
export const getRepositoryList = (params?: any) =>
    http.get(Api.GET_REPOSITORY_LIST, params);

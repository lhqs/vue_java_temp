import {baseUrl, axios} from './config';

// let testUrl = "http://localhost:8013"

/* 退出系统 */
export const logout = params => { return axios.get(`${baseUrl}/user/list`, { params:params })};

/* 登录系统 */
// export const login = params => { return axios.get(`${baseUrl}/login`, { params: params })};
export const login = params => { return axios.post(`${baseUrl}/login`, params)};

/* 获取用户信息 */
export const getUsername = params => { return axios.post(`${baseUrl}/username/getUsername`,  params)};


/* test */
export const test = params => { return axios.get(`${testUrl}/user/list`,  params)};

/* 获取图表数据 */
export const getDemoData = params => { return axios.get(`${baseUrl}/getDataInfoNum`,{params:params})};


export const userLogin = params => { return axios.post(`${baseUrl}/user/getUserInfo`,  params)};

import axios from 'axios';


let baseUrl = 'http://localhost:8011/api';
// let baseUrl = 'http://localhost:8013';

// axios.defaults.headers.common['accessToken'] = 123;
// axios.defaults.headers.common['projId'] = 213;
// axios.defaults.headers.common['Content-Type'] = "application/json;charset=UTF-8";

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

/* 配置应许携带cookie, 此外，Access-Control-Allow-Origin 字段的值需要为确定的域名，而不能直接用 ‘*’ 代替，方可实现跨域访问 */
axios.defaults.withCredentials = true;

export {baseUrl,axios};

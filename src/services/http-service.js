import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const apiUrl = 'http://localhost:5000/api/';

export default class HttpService {
    static async get(endPoint, authorization = true) {
        const request = {
            url: apiUrl + endPoint,
            headers: {},
            method: 'get'
        };
        if (authorization) {
            request.headers = HttpService.addAuthenticationToken();
        }
        return HttpService.hitApi(request);
    }

    static async post(endPoint, data = {}, authorization = true) {
        const request = {
            url: apiUrl + endPoint,
            data,
            method: "post",
            headers: {}
        };
        if (authorization) {
            request.headers = HttpService.addAuthenticationToken();
        }
        return HttpService.hitApi(request);
    }

    static addAuthenticationToken() {
        const headers = {
            Authorization: ''
        };
        const temp = localStorage.getItem('userData');
        let userData = {
            token: ''
        };
        if (typeof temp === "string") {
            userData = JSON.parse(temp);
        }
        if (userData && userData.token) {
            headers.Authorization = 'Bearer ' + userData.token
        }
        return headers
    }

    static async hitApi(request = {}) {
        try {
            return axios(request)
                .then((res) => {
                    return res
                }).catch((err) => {
                    console.log('err', err);
                    HttpService.showToast(err);
                })
        } catch (e) {
            console.log('Error', e)
        }
    }

    static showToast(err) {
        toast.error(err.response.data.message);
    }
}

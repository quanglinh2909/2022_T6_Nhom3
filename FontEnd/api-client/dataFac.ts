import { LoginPayload } from '@/models/index';
import axiosClient from './axios-client';

export const homeApi = {
    getDataHome() {
        return axiosClient.get('/data-fac/home');
    },
    getDoTheoThu(date: string,are:any) {
        return axiosClient.get(`data-fac/search/area?date=${date}&area=${are}`);
    },
    getArea() {
        return axiosClient.get(`area-dim`);
    },

    getProvinceDove(data:any) {
        return axiosClient.get(`data-fac/list/province?date=${data}`);
    },
    getPrize(data:any) {
        return axiosClient.post(`data-fac/search-number`,data);
    }
};

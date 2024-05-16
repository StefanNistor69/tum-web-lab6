import axios from "axios";

const mainUrl = "http://localhost:5000"
export class Service {
    getAxiosInstance(url, token) {
        const h = {};
        h["Content-Type"] = "application/json";
        console.log(token)
        if (token) {
            h["Authorization"] = "Bearer " + token;
        }

        const instance = axios.create({
            baseURL: mainUrl + url,
            //   timeout: 1000,
            headers: h,
        });

        return instance;
    }

    async postAxios(
        url,
        data,
        cb,
        token,
    ) {
        if (!cb) return;
        const instance = this.getAxiosInstance(url, token);

        try {
            const response = await instance.post("", JSON.stringify(data))
            cb(response.data)
        } catch (error) {
            console.log("Error", error)
        }
    }

    async getAxios(
        url,
        cb,
        token
    ) {
        if (!cb) return;
        const instance = this.getAxiosInstance(url, token);
        try {
            const response = await instance.get("");
            cb(response.data)
        } catch (error) {
            console.log("Error", error)
        }

    }

    async deleteAxios(
        url,
        cb,
        token
    ) {
        if (!cb) return;
        const instance = this.getAxiosInstance(url, token);
        try {
            const response = await instance.delete("");
            cb(response.data)
        } catch (error) {
            console.log("Error", error)
        }

    }
}
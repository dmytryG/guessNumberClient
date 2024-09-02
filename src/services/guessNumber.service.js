import {config} from "../config/cfg";
import axios from "axios";

export default class GuessNumberService {
    static async start(uid) {
        const axiosCfg = {
            method: 'post',
            url: `${config.serverAddress}/v1/start_game`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': uid,
            },
        };
        const resp = await axios(axiosCfg)
        return resp.data.ok
    }

    static async guess(val, uid) {
        const axiosCfg = {
            method: 'post',
            url: `${config.serverAddress}/v1/guess`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': uid,
            },
            data: {
                number: val
            }
        };
        const resp = await axios(axiosCfg)
        return resp.data.result
    }

}
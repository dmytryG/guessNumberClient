import {config} from "../config/cfg";
import axios from "axios";

export default class GuessNumberService {
    static async start() {
        const axiosCfg = {
            method: 'post',
            url: `${config.serverAddress}/v1/start_game`,
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const resp = await axios(axiosCfg)
        return resp.data.ok
    }

    static async guess(val) {
        const axiosCfg = {
            method: 'post',
            url: `${config.serverAddress}/v1/guess`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                number: val
            }
        };
        const resp = await axios(axiosCfg)
        return resp.data.result
    }

}
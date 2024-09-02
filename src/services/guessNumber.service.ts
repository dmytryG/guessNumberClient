import {config} from "../config/cfg";
import axios from "axios";

export default class GuessNumberService {
    public static async start(): Promise<boolean> {
        const axiosCfg = {
            method: 'post',
            url: `${config.serverAddress}/v1/start_game`,
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const resp = await axios(axiosCfg)
        const respData: { ok: boolean } = resp.data;
        return respData.ok
    }

    public static async guess(val: number): Promise<string> {
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
        const respData: { result: string } = resp.data;
        return respData.result
    }

}
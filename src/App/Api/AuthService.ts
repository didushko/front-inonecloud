import {IAuth, IAuthResponse} from "../Models/LoginModel";
import axios, {AxiosPromise, AxiosResponse} from "axios";
import {BASE_URL} from "../Config/Config";

function authUser(data: IAuth): Promise<IAuthResponse>{
    return axios.post(BASE_URL + 'auth',
        data
    )
}

const authService = {
    authUser
}

export default authService;
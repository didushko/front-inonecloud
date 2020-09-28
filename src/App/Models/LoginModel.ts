export interface IAuth{
    username: string,
    password: string,
    error?: string,
}

export interface IAuthResponse{
    token: string,
    expired_in: number
}
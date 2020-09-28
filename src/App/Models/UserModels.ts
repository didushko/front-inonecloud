
export interface ICreateUser{
    username: string,
    email: string,
    password: string,
    rPassword: string,
    validation: boolean,
    error: string,
    registration: string,
}

export interface IChangePassword{
    currentPassword: string,
    newPassword: string,
    rPassword: string,
    changePassword: string
    validation: boolean,
    error?: string,
}
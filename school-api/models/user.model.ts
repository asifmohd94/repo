export interface IRegisterUser {
    username: string
    email: string
    password: string
}

export interface ISignUser {
    username?: string
    email?: string
    password: string
}
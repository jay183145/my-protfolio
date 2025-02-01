export type User = {
    username: string
    email: string
    password: string
}

export type UserRegisterResponse = {
    _id: string
    username: string
    email: string
}

export type UserLogin = {
    username: string
    password: string
}

export type UserLoginResponse = {
    message: string
    token: string
    user: {
        _id: string
        username: string
        email: string
    }
}

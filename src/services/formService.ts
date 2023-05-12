import { User } from "../models/user";

export const postUser = (user: User) => {
    return fetch('http://localhost:8080/form/postUser', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
}
import { url } from "./../ApiConfig"

const baseUrl = url + "users";

export async function UserRegister(name, email, password) {
    const data = {
        name: name.trim(),
        email: email.trim(),
        password: password.trim()
    }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };
    let response = await fetch(baseUrl, options);
    return await response.json();
}

export async function UserInfoByToken(token) {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    };
    let response = await fetch(baseUrl + "/me", options);
    return await response.json();
}

export async function ShoppingListByUser(token) {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    };
    let response = await fetch(baseUrl + "/me/shopping-lists", options);
    return await response.json();
}

export async function ShoppingByUser(token) {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    };
    let response = await fetch(baseUrl + "/me/purchases", options);
    return await response.json();
}
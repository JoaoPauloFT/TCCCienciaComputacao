import { url } from "./../ApiConfig"

const baseUrl = url + "login";

export async function Login(email, password) {
    const data = {
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
    let resp = await response.json();
    let error = '';
    if (typeof resp["errors"] != "undefined") {
        let errors = resp["errors"];
        error = errors[0]["msg"];
    } else if (typeof resp["message"] != "undefined") {
        error = resp["message"];
    }
    if (error == '') {
        return resp;
    } else {
        return {message: error};
    }
}


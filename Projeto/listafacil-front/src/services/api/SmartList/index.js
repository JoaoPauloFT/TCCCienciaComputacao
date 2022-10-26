import { url } from "./../ApiConfig"

const baseUrl = url + "smart-list";

export async function SmartList(authorization, prod) {

    const data = {
        products: prod
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authorization
        },
        body: JSON.stringify(data),
    };

    let response = await fetch(baseUrl, options);
    let resp = await response.json();
    return resp;
}
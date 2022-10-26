import { url } from "./../ApiConfig"

const baseUrl = url + "purchases";

export async function addPurchases(authorization, title) {

    const data = {
        title: title.trim()
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

export async function addPurchasesProducts(authorization, purchase, products) {

    var array = "";
    for (var i = 0; i < products.length; i++) {
        array = [
            ...array,
            {
                name: products[i]["name"],
            }
        ];
    }

    const data = {
        products: array
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authorization
        },
        body: JSON.stringify(data),
    };

    let response = await fetch(baseUrl + "/" + purchase + "/products", options);
    let resp = await response.json();

    return resp;
}

export async function PurchasesInfo(token, id) {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    };
    let response = await fetch(baseUrl + "/" + id, options);
    return await response.json();
}

export async function DeletePurchase(token, id) {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    };
    let response = await fetch(baseUrl + "/" + id, options);
    return await response;
}
import { url } from "./../ApiConfig"

const baseUrl = url + "shopping-lists";

export async function addShoppingList(authorization, title) {

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

export async function addShoppingListProducts(authorization, list, products) {

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

    let response = await fetch(baseUrl + "/" + list + "/products", options);
    let resp = await response.json();

    return resp;
}

export async function ShoppingListInfo(token, id) {
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

export async function DeleteShoppingList(token, id) {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    };
    let response = await fetch(baseUrl + "/" + id, options);
    return response;
}

export async function DeleteItemShoppingList(token, list, product) {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    };
    let response = await fetch(baseUrl + "/" + list + "/products/" + product, options);
    return await response.json();
}

export async function CheckProducts(authorization, list, product, status) {

    const data = {
        checked: status
    }

    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authorization
        },
        body: JSON.stringify(data),
    };

    let response = await fetch(baseUrl + "/" + list + "/products/" + product, options);
    let resp = await response.json();

    return resp;
}
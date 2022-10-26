import { urlPython } from "./../ApiConfig"

const baseUrl = urlPython + "files";

export async function ProcessImage(uri, name, type) {

    let formData = new FormData();
    formData.append('file', { uri: uri, name: "file", type });

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json'
        },
        body: formData,
    };

    let response = await fetch(baseUrl + "/", options);
    let resp = await response.json();
    return resp;
}